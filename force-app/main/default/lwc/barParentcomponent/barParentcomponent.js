import { LightningElement } from 'lwc';

export default class BarParentcomponent extends LightningElement {
    changeColor()
    {
        this.template.querySelector('c-bar-childcomponent').changeBarcolor()
    }
}