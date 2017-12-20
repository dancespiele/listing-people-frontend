import { Component, Template, m} from "pyrite";
import { services, PeopleService } from "../../connect"
import { MainPageTemplate } from "./MainPageTemp";

export interface Field {
    tag: string
    type: string,
    name: string,
    title?: string,
    placeholder?: string
}

@Template(MainPageTemplate)
export class MainPage extends Component<any> {
    people: Array<any> = [];
    totalPeople: Array<any> = [];
    titleCols: Array<string> = ["Name", "Super Power", "Rich", "Genius", "Delete"];

    peopleService: PeopleService = services.People;

    fields: Array<Field> = [
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

        this.peopleService.getPeople(options).then((people: any) => {
            this.totalPeople.splice(0, this.totalPeople.length, ...people);
            if(this.props.key) {
                people = people.filter((person: any) => 
                    person[this.props.key]);
            }
            this.people.splice(0, this.people.length, ...people);
        });
    }

    async addPerson(person: any, event?: any) {
        try {
            await this.peopleService.addPerson(person);
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
            const newPerson = await this.peopleService.deletePerson(id);
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
        const url: string = `/list/${filter}`;
        m.route.set(url);
        this.getPeople();
    }
}