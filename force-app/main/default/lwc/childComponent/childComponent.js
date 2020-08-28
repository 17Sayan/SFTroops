import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api name="childdata"
    @api getdata()
    {
        return this.name;
    }
}