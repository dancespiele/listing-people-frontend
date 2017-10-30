import { Component, Attributes, Children, Render, Inject, RouteParams } from "pyrite";
import { MainPageTemplate } from "./MainPageTemp";

@Component(MainPageTemplate)
export class MainPage {
    people: Array<any> = [];
    titleCols: Array<string> = ["Name", "Super Power", "Rich", "Genius"];
    cols: Array<string> = ["name", "superPower", "rich", "genius"];
    
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