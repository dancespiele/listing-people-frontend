import { Component, Attributes, Children, Render } from "pyrite";
import { TableTemp } from "./TableTemp"

@Component(TableTemp)
export class Table {
    @Attributes attrs: {
        elements: Array<any>;
        titles: Array<string>;
        cols: Array<any>;
        orderCols: Function;
        onDelete: Function;
    }
    sure: any = {};
    order: boolean = false;

    onDelete(id: string) {
        this.attrs.onDelete(id);
    }

    changeSure(id: string) {
        this.sure[id] = !this.sure[id];
    }

    orderCols(field: string) {
        this.order =! this.order;
        this.attrs.orderCols(field, this.order);
    }
}