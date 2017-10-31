import { Component, Attributes, Children, Render } from "pyrite";
import {Table} from './TableComp';

export function TableTemp(this: Table) {
    const headers = this.attrs.titles.map((col, index) => {
        if(this.attrs.cols[index]) {
            return (<td onclick={() => this.attrs.orderBy(this.attrs.cols[index].name)}>{col} <i class='glyphicon glyphicon-sort'></i></td>);
        }
        return (<td>{col}</td>)
    });

    const rows = this.attrs.elements.map((element) => 
        <tr key={element._id}>
            {this.attrs.cols.map((col: any) => {
                if(col.type === 'checkbox')
                    return (
                        <td>
                            <input type="checkbox" checked={element[col.name]} disabled></input>
                        </td>
                    );
                return (<td>{element[col.name]}</td>);
                
            })}
            <td>
                {this.sure[element._id] ?
                    <p>Are you sure (
                        <a onclick={this.onDelete.bind(this, element._id)}>yes</a> 
                        <a onclick={this.changeSure.bind(this, element._id)}>No</a>)</p>
                    : <button onclick={this.changeSure.bind(this, element._id)}>X</button>}
            </td>
        </tr>
    );

    const table = (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>{headers}</tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );

    return table;
}
