import { Sidebar, AddForm, Table } from '../../components';
import { Render } from "pyrite";
import { MainPage } from "./MainPageComp";

export function MainPageTemplate (this: MainPage) {
    const superPower = !this.totalPeople.some(person=> person.superPower);
    const rich = !this.totalPeople.some(person=> person.rich);
    const genius = !this.totalPeople.some(person=> person.genius);
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
                        cols={this.cols} 
                        titles={this.titleCols}
                        onDelete={this.deletePerson.bind(this)}
                        orderCols={this.orderCols.bind(this)}>
                    </Table> : null}
                </div>
                <div class="col-xs-12 btn-group">
                    <button 
                        onclick={this.filterTable.bind(this, '')} 
                        class="btn btn-primary"
                        disabled={!this.totalPeople.length}> All
                    </button>
                    <button 
                        onclick={this.filterTable.bind(this, 'superPower')}
                        class="btn btn-primary"
                        disabled={superPower}>Super Power
                    </button>
                    <button 
                        onclick={this.filterTable.bind(this, 'rich')}
                        class="btn btn-primary"
                        disabled={rich}>Rich
                    </button>
                    <button 
                        onclick={this.filterTable.bind(this, 'genius')} 
                        class="btn btn-primary"
                        disabled={genius}>Genius
                    </button>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Sidebar elements={this.people}></Sidebar>
            </div>
        </div>
	);
}