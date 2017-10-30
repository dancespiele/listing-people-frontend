import { Component, Attributes } from "pyrite";
import { AddElementTemp } from './AddElementTemp';

@Component(AddElementTemp)
export class AddElement {
    @Attributes attrs: {
        title: String;
        onCreate: Function;
    }

    person: any = {};
}