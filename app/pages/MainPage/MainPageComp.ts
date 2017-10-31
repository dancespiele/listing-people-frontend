import { AddElement } from '../../components';
import { Component, Attributes, Children, Render, Inject, RouteParams} from "pyrite";
import { MainPageTemplate } from "./MainPageTemp";

@Component(MainPageTemplate)
export class MainPage {
    people: Array<any> = [];
    titleCols: Array<string> = ["Name", "Super Power", "Rich", "Genius"];
    cols: Array<string> = ["name", "superPower", "rich", "genius"];
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

    ]
    
    @Children children: any;
    @Inject('connect.People') service: any;
    @RouteParams params: any;

	$onCreate() {
        this.getPeople();
    }

    async getPeople() {
        const options = this.params.filter ? {
            filter: {
                [this.params.filter]: true
            }
        }: {};

        const people = await this.service.getPeople(options);
        this.people.splice(0, -1, ...people);
    }

    async addPerson(person: any) {
        const newPerson = await this.service.addPerson(person);
        console.log(newPerson);
        this.people.splice(0, -1, newPerson);
    }
}