import { Sidebar, AddForm, Table } from '../../components';
import { Render } from "pyrite";
import { MainPage } from "./MainPageComp";

export function MainPageTemplate (this: MainPage) {
	return (
		<div>
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <AddForm 
                    title="Add new person" 
                    onCreate={this.addPerson.bind(this)}
                    fields={this.fields}
                    titleSubmit="Add">
                </AddForm>
                <Table 
                    elements={this.people} 
                    cols={this.cols} 
                    titles={this.titleCols}
                    onDelete={this.deletePerson.bind(this)}
                    orderBy={this.orderBy.bind(this)}>
                </Table>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Sidebar elements={this.people}></Sidebar>
            </div>
        </div>
	);
}