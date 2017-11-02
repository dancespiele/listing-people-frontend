import { Component, Attributes, Children, Render, Inject, RouteParams, core} from "pyrite";
import { MainPageTemplate } from "./MainPageTemp";

@Component(MainPageTemplate)
export class MainPage {
    people: Array<any> = [];
    totalPeople: Array<any> = [];
    titleCols: Array<string> = ["Name", "Super Power", "Rich", "Genius", "Delete"];

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
    orderBy: any;
    order: boolean;
    
    @Children children: any;
    @Inject('connect.People') service: any;
    @RouteParams params: any;

	$onCreate() {
        this.getPeople();
    }

    getPeople() {
        const options : any = {};

        if(this.orderBy) {
            options.sort = {
                [this.orderBy] : (this.order) ? 1 : -1
            }
        }

        this.service.getPeople(options).then((people: any) => {
            this.totalPeople.splice(0, this.totalPeople.length, ...people);
            if(this.params.filter) {
                people = people.filter((person: any) => 
                    person[this.params.filter]);
            }
            this.people.splice(0, this.people.length, ...people);
        });
    }

    async addPerson(person: any, event?: any) {
        try {
            await this.service.addPerson(person);
            this.filterTable('', event);
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
            this.people.splice(index, 1);
            this.totalPeople.splice(index, 1);
        } catch(error) {
            console.log(error);
        }
    }

    async orderCols(field: string, order: boolean) {
        this.orderBy = field;
        this.order = order;
        this.getPeople();
    }

    filterTable(filter: string, event?: any) {
        event.redraw = false;
        const url: string = `/list/${filter}`;
        core.route.set(url);
        this.getPeople();
    }
}