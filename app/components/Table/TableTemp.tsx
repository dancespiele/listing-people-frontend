import { Component, m } from "pyrite";
import {Table} from './TableComp';
import "./TableStyles.scss";

export function TableTemp(this: Table) {
    const headers = this.props.titles.map((col, index) => {
        if(this.props.cols[index]) {
            return (<td onclick={this.orderCols.bind(this, this.props.cols[index].name)}>{col}
                 <i class='glyphicon glyphicon-sort'></i></td>);
        }
        return (<td>{col}</td>)
    });

    const rows = this.props.elements.map((element) => 
        <tr key={element._id}>
            {this.props.cols.map((col: any) => {
                if(col.type === 'checkbox')
                    return (
                        <td>
                            <input type="checkbox" checked={element[col.name]} disabled></input>
                        </td>
                    );
                return (<td>{element[col.name]}</td>);
                
            })}
            <td class="text-center delete">
                {this.sure[element._id] ?
                    <p>Are you sure?
                        <a class="btn btn-warning" onclick={this.onDelete.bind(this, element._id)}>yes</a> 
                        <a class="btn btn-default" onclick={this.changeSure.bind(this, element._id)}>No</a></p>
                    : <button class="btn btn-danger" onclick={this.changeSure.bind(this, element._id)}>X</button>}
            </td>
        </tr>
    );

    const table = (
        <div class="table-component">
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
