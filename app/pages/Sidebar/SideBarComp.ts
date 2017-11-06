import { Component, Attributes, Children, Render } from "pyrite";
import { SidebarTemp } from "./SideBarTemp"

@Component(SidebarTemp)
export class Sidebar {
    @Attributes attrs: {
        elements: Array<any>;
    }
}