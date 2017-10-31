import { Component, Attributes, Children, Render, Inject, RouteParams} from "pyrite";
import { MainPageTemplate } from "./MainPageTemp";

@Component(MainPageTemplate)
export class MainPage {
    people: Array<any> = [];
    titleCols: Array<string> = ["Name", "Super Power", "Rich", "Genius", "Delete"];
    cols: Array<object> = [{
        name: "name",
        type: "text"
    }, {
        name: "superPower",
        type: "checkbox"
    }, {
        name: "rich",
        type: "checkbox"
    }, {
        name: "rich",
        type: "checkbox"
    }];

    fields: Array<object> = [
        {
            tag: 'input',
            type: 'text',
            name: 'name',
            placeholder: 'name'
        },
        {
            tag: 'input',
            type: 'checkbox',
            name: 'superPower',
            title: 'Super power'
        },
        {
            tag: 'input',
            type: 'checkbox',
            name: 'rich',
            title: 'Rich'
            
        },
        {
            tag: 'input',
            type: 'checkbox',
            name: 'genius',
            title: 'Genius'
        },

    ];
    order: string;
    
    @Children children: any;
    @Inject('connect.People') service: any;
    @RouteParams params: any;

	$onCreate() {
        this.getPeople();
    }

    async getPeople() {
        const options : any = this.params.filter ? {
            filter: {
                [this.params.filter]: true
            }
        }: {};

        if(this.order) {
            options.sort = {
                [this.order] : 1
            }
        }

        const people = await this.service.getPeople(options);
        this.people.splice(0, this.people.length, ...people);
    }

    async addPerson(person: any) {
        try {
            const newPerson = await this.service.addPerson(person);
            console.log(newPerson);
            this.people.splice(0, -1, newPerson);
            return {
                error: false,
                message: 'The new was added'
            }
        } catch(error) {
            return {
                error: true,
                message: error.message
            };
        }
    }

    async deletePerson(id: string) {
        try {
            const newPerson = await this.service.deletePerson(id);
            const index = this.people.findIndex((person: any) => person._id === id);
            console.log(index);
            this.people.splice(index, 1);
        } catch(error) {
            console.log(error);
        }
    }

    async orderBy(field: string) {
        this.order = field;
        this.getPeople();
    }
}