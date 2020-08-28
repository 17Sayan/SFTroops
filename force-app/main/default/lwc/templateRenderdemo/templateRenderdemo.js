import { LightningElement, } from 'lwc';

export default class TemplateRenderdemo extends LightningElement {
    inputtext=null;
    changehandler(event)
    {
        this.inputtext=event.target.value;
    }
    get checktext()
    {
        return this.inputtext==='Troops'
    }
}