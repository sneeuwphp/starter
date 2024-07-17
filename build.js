import * as esbuild from "esbuild";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import sneeuw from "@sneeuwphp/esbuild-plugin-sneeuw";
import fs from "fs";
import chokidar from "chokidar";

const tailwindConfig = {
	content: ["./src/**/*.{html,ski}"],
	theme: {
		extend: {},
	},
	plugins: [],
};

const tailwindPlugin = {
	name: "sneeuw-tailwind",
	setup(build) {
		build.onLoad({ filter: /\.css$/ }, async ({ path }) => {
			const postcssInstance = postcss().use(
				tailwindcss(tailwindConfig),
				autoprefixer(),
			);

			const file = fs.readFileSync(path);
			const processed = await postcssInstance.process(file, {
				from: undefined,
			});

			return { contents: processed.css, loader: "css" };
		});
	},
};

const ctx = await esbuild.context({
	entryPoints: ["./src/ssr.ts"],
	outfile: "ssr.cjs",
	platform: "node",
	bundle: true,
	plugins: [sneeuw],
	jsx: "automatic",
	jsxImportSource: "@sneeuwphp/ski",
	loader: { ".html": "text" },
});

const stylesCtx = await esbuild.context({
	entryPoints: ["./src/styles/app.css"],
	outfile: "./public/styles.css",
	plugins: [tailwindPlugin],
});

chokidar.watch("./src/**/*.{html,ski}").on("change", async (path) => {
	console.log(`${path} has changed, triggering rebuild...`);
	await stylesCtx.rebuild();
});

await ctx.watch();
await stylesCtx.watch();

console.log("watching for file changes...");
