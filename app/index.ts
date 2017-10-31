import { Pyrite, core } from "pyrite";
import { PyriteConnect } from "pyrite-connect";

import { router } from "./router";

const connect = new PyriteConnect({
	url: "http://localhost:8000"
});

const pyrite = new Pyrite({
	inject: {
		connect: connect.getRoutes()
	},
	routes: router,
	rootPath: "/list"
});
