import { Component, Template, m } from "pyrite";
import { TableTemp } from "./TableTemp";

export interface TableAttributes {
    elements: Array<any>;
    titles: Array<string>;
    cols: Array<any>;
    orderCols: Function;
    onDelete: Function;
}

@Template(TableTemp)
export class Table extends Component<TableAttributes> {
    sure: any = {};
    order: boolean = false;

    onDelete(id: string) {
        this.props.onDelete(id);
    }

    changeSure(id: string) {
        this.sure[id] = !this.sure[id];
    }

    orderCols(field: string) {
        this.order =! this.order;
        this.props.orderCols(field, this.order);
    }
}