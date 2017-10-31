import { Sidebar, AddElement, Table } from '../../components';
import { Render } from "pyrite";
import { MainPage } from "./MainPageComp";
import 'bootstrap/dist/css/bootstrap.min.css';

export function MainPageTemplate (this: MainPage) {
	return (
		<div>
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <AddElement 
                    title="Add new person" 
                    onCreate={this.addPerson.bind(this)}
                    fields={this.fields}
                    titleSubmit="Add">
                </AddElement>
                <Table 
                    elements={this.people} 
                    cols={this.cols} 
                    titles={this.titleCols}>
                </Table>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Sidebar elements={this.people}></Sidebar>
            </div>
        </div>
	);
}