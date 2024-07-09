import { createServer } from "@sneeuwphp/ski/ssr";

createServer({
	resolve: (name: string) => import(`./pages/${name}.ski`),
	layout: () => import("./app.html"),
});
