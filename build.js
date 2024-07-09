import * as esbuild from "esbuild";
import sneeuw from "@sneeuwphp/esbuild-plugin-sneeuw";

await esbuild.build({
	entryPoints: ["src/ssr.ts"],
	platform: "node",
	bundle: true,
	plugins: [sneeuw],
	outfile: "out.js",
	jsxFactory: "h",
	jsxFragment: "Fragment",
	loader: {
		".html": "text",
	},
});
