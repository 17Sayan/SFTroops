import { LightningElement,api } from 'lwc';

export default class BarChildcomponent extends LightningElement {
    className="greenBar"
    @api changeBarcolor()
    {
        this.className="redBar"
    } 
}