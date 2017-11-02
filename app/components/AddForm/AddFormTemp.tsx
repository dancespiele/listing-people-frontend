import { Component, Attributes, Children, Render } from "pyrite";
import {AddForm} from './AddFormComp';
import './AddFormStyles.scss';

export function AddFormTemp(this: AddForm) {
    const template= this.attrs.fields.map(field => {
        let fragment = null;
        if(field.type === 'text') {
            fragment = <div class='form-group'>
                {(field.title) ? <label>{field.title}</label> : null}
                <input
                    class='form-control'
                    type={field.type}
                    placeholder={field.placeholder}
                    value={this.form[field.name]}
                    oninput={(event: any) => this.form[field.name] = event.target.value}>
                </input>
            </div>
        } else if(field.type === 'checkbox') {
            fragment = <div class='form-group'>
                {(field.title) ? <label>{field.title}</label> : null}
                <input
                    type={field.type}
                    checked={this.form[field.name]}
                    onchange={(event: any) => this.form[field.name] = event.target.checked}>
                </input>
            </div>
        }
        
        return fragment;
    });

    return (
        <div class="form-component">
            <h2>{this.attrs.title}</h2>
            <div class="form">
                <div class="form-inline">
                    {template}
                    <button class="btn btn-success submit" onclick={this.onCreate.bind(this)}>Add</button>
                </div>
            </div>
            
            <div ref="message">
                <span></span>
            </div> 
        </div>
    );
}
