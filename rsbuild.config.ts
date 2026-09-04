import { defineConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginSolid } from "@rsbuild/plugin-solid";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";
import UnoCSS from "@unocss/postcss";

export default defineConfig({
	plugins: [
		pluginBabel({
			include: /\.(?:jsx|tsx)$/,
		}),
		pluginSolid(),
	],
	tools: {
		cssLoader: {
			url: {
				filter: (url) => !url.startsWith("/assets/fonts/"),
			},
		},
		postcss: (_opts, { addPlugins }) => {
			addPlugins(UnoCSS());
		},
		rspack: {
			plugins: [
				tanstackRouter({
					target: "solid",
					autoCodeSplitting: true,
					routesDirectory: "./src/routes",
					generatedRouteTree: "./src/routeTree.gen.ts",
					routeFileIgnorePrefix: "-",
					quoteStyle: "single",
				}),
			],
		},
	},
});
