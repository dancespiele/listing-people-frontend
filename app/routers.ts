import { MainPage } from "./pages";

export const configRouters = [{
	path: '/list',
	component: MainPage
},{
	path: '/list/:filter',
	component: MainPage
}]