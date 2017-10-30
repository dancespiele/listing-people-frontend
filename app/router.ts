import { MainPage } from "./pages";

export const router = [{
	path: '/list',
	component: MainPage
},{
	path: '/list/:filter',
	component: MainPage
}]