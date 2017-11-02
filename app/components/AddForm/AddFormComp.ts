import { Component, Attributes, Refs } from "pyrite";
import { AddFormTemp } from './AddFormTemp';

@Component(AddFormTemp)
export class AddForm {
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
        titleSubmit: string,
    }
    @Refs references: any;

    form: any = {};

    onCreate(event: any) {
        const refMessage = this.references.message;
        this.attrs.onCreate(this.form, event).then((msg: {error: boolean, message: string})=> {
            if(msg.error){
                refMessage.className = 'error'
                refMessage.children[0].textContent= msg.message;
            }

            setTimeout(() => {
                refMessage.className = ''
                refMessage.children[0].textContent= '';
            }, 3000);
        });
        
        
        Object.keys(this.form).forEach((element: any) => {
            let isTypeText: Boolean;
            isTypeText = this.attrs.fields.some(field => 
                field.name === element && field.type === 'text');
            if(isTypeText) {
                this.form[element] = '';
            } else {
                this.form[element] = null;
            }
        });
    }
}