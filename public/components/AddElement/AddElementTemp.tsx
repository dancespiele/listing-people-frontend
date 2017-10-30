import { Component, Attributes, Children, Render } from "pyrite";
import {AddElement} from './AddElementComp';

export function AddElementTemp(this: AddElement) {
    return (
        <div>
            <h1>{this.attrs.title}</h1>
            <input type="text" oninput={(event: any) => this.person.name = event.target.value}/>
            <button onclick={() => this.attrs.onCreate(this.person)}>Add</button>
        </div>
    );
}
