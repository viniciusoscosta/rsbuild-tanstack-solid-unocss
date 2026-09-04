import type { QueryClient } from "@tanstack/solid-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
} from "@tanstack/solid-router";
import { Suspense } from "solid-js";

export interface AppRouterContext {
	auth: null;
	queryClient: QueryClient;
}
export const Route = createRootRouteWithContext<AppRouterContext>()({
	head: () => ({
		meta: [
			{
				title: "Frontend Boilerplate",
			},
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<HeadContent />
			<Suspense>
				<Outlet />
			</Suspense>
		</>
	);
}
