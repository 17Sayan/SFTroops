import { LightningElement,api } from 'lwc';

export default class AlertChildcomponent extends LightningElement {
 
    @api message
    @api className
    get alertclassName()
    {
        return this.className ? `alert ${this.className}`:`alert`
    }
}