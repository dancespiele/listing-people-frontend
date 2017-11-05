import { Sidebar, AddForm, Table } from '../../components';
import { Render } from "pyrite";
import { MainPage } from "./MainPageComp";

export function MainPageTemplate (this: MainPage) {
    const qualities = 
        
        this.fields.map((field: any)=> {
            let button = null;
            if (field.name !== "name") {
                button = <button 
                    onclick={this.filterTable.bind(this, field.name)}
                    class={"btn btn-primary " + (this.params.filter === field.name ? "active" : "")}
                    disabled={!this.totalPeople.some((person) => person[field.name])}>{field.title}
                    </button>
            }
            return button;
    });

	return (
		<div>
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <div class="col-xs-12">
                    <AddForm 
                        title="Add new person" 
                        onCreate={this.addPerson.bind(this)}
                        fields={this.fields}
                        titleSubmit="Add">
                    </AddForm>
                    {(this.people.length) ? <Table 
                        elements={this.people}
                        titles={this.titleCols} 
                        cols={this.fields}
                        onDelete={this.deletePerson.bind(this)}
                        orderCols={this.orderCols.bind(this)}>
                    </Table> : null}
                </div>
                {(this.people.length) ? <div class="col-xs-12 btn-group">
                    <button 
                        onclick={this.filterTable.bind(this, '')} 
                        class={"btn btn-primary " + (this.totalPeople.length === this.people.length ? "active" : "")}> All
                    </button>
                    {qualities}
                </div> :null}
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Sidebar elements={this.totalPeople}></Sidebar>
            </div>
        </div>
	);
}