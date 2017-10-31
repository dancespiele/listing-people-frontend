import { Component, Attributes } from "pyrite";
import { AddElementTemp } from './AddElementTemp';

@Component(AddElementTemp)
export class AddElement {
    @Attributes attrs: {
        title: String;
        onCreate: Function;
        fields : Array<{
            tag: string
            type: string,
            name: string,
            title: string,
            placeholder: string
        }>;
        titleSubmit: string
    }

    elements: any = {};

    onCreate() {
        console.log(this.elements);
        this.attrs.onCreate(this.elements);
        Object.keys(this.elements).forEach((element: any) => {
            let isTypeText: Boolean;
            isTypeText = this.attrs.fields.some(field => 
                field.name === element && field.type === 'text');
            if(isTypeText) {
                this.elements[element] = '';
            } else {
                this.elements[element] = null;
            }
        });
    }
}