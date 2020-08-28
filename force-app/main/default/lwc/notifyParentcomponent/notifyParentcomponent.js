import { LightningElement } from 'lwc';

export default class NotifyParentcomponent extends LightningElement {

    showNotification=false
    showHandler()
    {
        this.showNotification=true
    }

}