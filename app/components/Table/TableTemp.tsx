import { Component, Attributes, Children, Render } from "pyrite";
import {Table} from './TableComp';

export function TableTemp(this: Table) {
    const cols = this.attrs.titles.map((col) => 
        <td>{col}</td>
    );

    const rows = this.attrs.elements.map((element) => 
        <tr>
            {this.attrs.cols.map((col: string) => 
                <td>{element[col]}</td>
            )}
        </tr>
    );

    const table = (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>{cols}</tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );

    return table;
}
