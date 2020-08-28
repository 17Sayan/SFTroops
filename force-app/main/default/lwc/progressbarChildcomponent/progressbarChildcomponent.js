import { LightningElement,api } from 'lwc';

export default class ProgressbarChildcomponent extends LightningElement {
    @api percentage;
    get getStyle()
    {
        return `width:`+this.percentage+'%'
    }
}
