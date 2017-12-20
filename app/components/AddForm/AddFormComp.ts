import { Component, Template } from "pyrite";
import { AddFormTemp } from './AddFormTemp';

export interface TableAttributes {
    title: String;
    onCreate: Function;
    fields : Array<{
        tag: string
        type: string,
        name: string,
        title?: string,
        placeholder?: string
    }>;
    titleSubmit: string;
}

@Template(AddFormTemp)
export class AddForm extends Component<TableAttributes>{
    

    form: any = {};

    onCreate(event: any) {
        const refMessage = document.getElementsByClassName('message')[0];
        this.props.onCreate(this.form, event).then((msg: {error: boolean, message: string})=> {
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
            isTypeText = this.props.fields.some(field => 
                field.name === element && field.type === 'text');
            if(isTypeText) {
                this.form[element] = '';
            } else {
                this.form[element] = null;
            }
        });
    }
}