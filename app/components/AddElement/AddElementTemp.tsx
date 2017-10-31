import { Component, Attributes, Children, Render } from "pyrite";
import {AddElement} from './AddElementComp';

export function AddElementTemp(this: AddElement) {
    const template= this.attrs.fields.map(field => {
        let fragment = null;
        if(field.type === 'text') {
            fragment = <div class='form-group'>
                {(field.title) ? <label>{field.title}</label> : null}
                <input 
                    type={field.type}
                    placeholder={field.placeholder}
                    value={this.elements[field.name]}
                    oninput={(event: any) => this.elements[field.name] = event.target.value}>
                </input>
            </div>
        } else if(field.type === 'checkbox') {
            fragment = <div class='form-group'>
                {(field.title) ? <label>{field.title}</label> : null}
                <input
                    type={field.type}
                    checked={this.elements[field.name]}
                    onchange={(event: any) => this.elements[field.name] = event.target.value}>
                </input>
            </div>
        }
        
        return fragment;
    });

    return (
        <div class="form">
            <div class="form-inline">
                {template}
                <button onclick={this.onCreate.bind(this)}>Add</button>
            </div>
        </div>
    );
}
