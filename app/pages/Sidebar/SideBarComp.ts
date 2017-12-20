import { Component, Template } from "pyrite";
import { SidebarTemp } from "./SideBarTemp";

export interface SidebarAttibutes {
    elements: Array<any>;
}

@Template(SidebarTemp)
export class Sidebar extends Component<SidebarAttibutes>{}