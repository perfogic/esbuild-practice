const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts", "src/workers/count.ts"],
    bundle: true,
    outdir: "dist",
    format: "cjs",
    platform: "node",
    define: {},
    loader: { ".ts": "ts" },
    write: true,
  })
  .catch(() => process.exit(1));
