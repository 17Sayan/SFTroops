import { LightningElement } from 'lwc';

export default class Databinding extends LightningElement {
    name="Salesforce Troop"
     title="Salesforce Developer"
    changehandler(event){
        this.title=event.target.value;

    }
}