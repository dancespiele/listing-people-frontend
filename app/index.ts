import { router, m } from "pyrite";
import { PyriteConnect } from "pyrite-connect";
import 'bootstrap/dist/css/bootstrap.min.css';

import {services} from "./connect"
import { configRouters } from "./routers";

const connect = new PyriteConnect({
	url: "http://localhost:8000"
});

connect.getRoutes()
.then((routers) => {
	Object.assign(services, routers);

	m.route(document.body, "/list", router.build(configRouters as any));
});
