"""Import public portfolio content and original media; no invented assets."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.parse import quote, urlsplit
from concurrent.futures import ThreadPoolExecutor
import json, re

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://pameladesav.framer.website/'
class Parser(HTMLParser):
    def __init__(self):
        super().__init__(); self.items=[]; self.capture=None; self.depth=0
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag in ('h1','h2','h3','p') and self.capture is None:
            self.capture={'tag':tag,'text':''}; self.depth=1
        elif self.capture and tag not in ('img','br','hr','source','input','meta','link'):
            self.depth+=1
        if tag in ('img','video','source') and a.get('src'):
            self.items.append({'tag':tag,**{k:a[k] for k in ('src','poster','width','height','alt') if a.get(k)}})
    def handle_endtag(self,tag):
        if self.capture:
            self.depth-=1
            if self.depth==0:
                self.items.append(self.capture); self.capture=None
    def handle_data(self,data):
        if self.capture: self.capture['text']+=data

def get(url):
    return urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=45).read()

slugs=['uniao-do-lago','calcário-guaraí','nabeauty-to','thepixellife','estanciaimperial','agropetbrand','jdstore']
def page(path):
    raw=get(BASE+quote(path,safe='/')).decode(); p=Parser(); p.feed(raw)
    return raw,p.items

def run():
    (ROOT/'public/assets').mkdir(parents=True,exist_ok=True)
    (ROOT/'src/data').mkdir(parents=True,exist_ok=True)
    (ROOT/'reference').mkdir(exist_ok=True)
    out={}; jobs={}
    for slug in slugs+['contact','home']:
        raw,items=page('' if slug=='home' else ('contact' if slug=='contact' else 'works/'+slug))
        (ROOT/'reference'/f'{slug}.html').write_text(raw,encoding='utf-8')
        content=[]; media=[]; seen=set(); before_related=True
        for i in items:
            if i.get('text','').strip().upper()=='PRÓXIMOS PROJETOS': before_related=False
            if i.get('text') and i['text'] not in seen:
                content.append(i); seen.add(i['text'])
            if i['tag'] in ('img','video','source') and before_related:
                url=i['src']; clean=url.split('?')[0]
                if clean in seen: continue
                seen.add(clean)
                if i['tag']=='img':
                    filename=urlsplit(clean).path.split('/')[-1]
                    dest='/assets/'+filename
                    jobs[dest]=clean+'?scale-down-to=1600'
                    media.append({**i,'src':dest,'original':url})
                else:
                    # Original hosted videos stay lazy; avoid downloading large media without need.
                    media.append({**i,'tag':'video'})
        out[slug]={'content':content,'media':media}
    def download(item):
        dest,url=item; path=ROOT/'public'/dest.lstrip('/')
        if not path.exists():
            try: path.write_bytes(get(url))
            except Exception as e: return f'FAILED {url}: {e}'
        return f'{path.name}: {path.stat().st_size}'
    with ThreadPoolExecutor(max_workers=6) as pool:
        for result in pool.map(download,jobs.items()): print(result)
    (ROOT/'src/data/reference.json').write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
    print('Imported',len(out),'pages;',len(jobs),'images')

if __name__=='__main__': run()
