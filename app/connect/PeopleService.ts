export interface Person {
    name: string;
    superPower?: boolean;
    rich?: boolean;
    genius?: boolean;

}

export interface PeopleService {
    getPeople(options: Object): Promise<Object>;
    addPerson(person: Person): Promise<Person>;
    deletePerson(id: string): Promise<number>;
}