import { Component, Attributes, Children, Render } from "pyrite";
import {Sidebar} from './SideBarComp';

export function SidebarTemp(this: Sidebar) {
    const countPeople = this.attrs.elements.length;

    const superPower = this.attrs.elements.filter((element) => element.superPower);
    const rich = this.attrs.elements.filter((element) => element.rich);
    const genius = this.attrs.elements.filter((element) => element.genius);

    const skills = (
        <div>
            <p>With superpower {superPower.length}</p>
            <p>Rich {rich.length}</p>
            <p>Genius {genius.length}</p>
        </div>
    );

    return (
        <div>
            <h1>Sidebar</h1>
            <h2>Total People {countPeople}</h2>
            {countPeople ? skills : null}
        </div>
    );
}
