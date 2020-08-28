import { LightningElement,track } from 'lwc';

export default class TemplateToogledemo extends LightningElement {
   @track toggletext=true;
   togglehandler()
    {
        this.toggletext=!this.toggletext
    }
}