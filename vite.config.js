import { defineConfig } from "vite";
import { normalizeBase } from "./src/site-paths.js";

export default defineConfig({
  base: normalizeBase(process.env.SITE_BASE_PATH),
});
