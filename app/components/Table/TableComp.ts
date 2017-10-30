import { Component, Attributes, Children, Render } from "pyrite";
import { TableTemp } from "./TableTemp"

@Component(TableTemp)
export class Table {
    @Attributes attrs: {
        elements: Array<any>;
        titles: Array<string>;
        cols: Array<string>;
    }
}