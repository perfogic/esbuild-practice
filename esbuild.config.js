const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outdir: "dist",
    format: "esm",
    platform: "node",
    define: {},
    loader: { ".ts": "ts" },
    write: true,
  })
  .catch(() => process.exit(1));
