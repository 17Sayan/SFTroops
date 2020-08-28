import { LightningElement } from 'lwc';

export default class NotifyChildcomponent extends LightningElement {
    showChildNotification=false
    clickHandler(){
        this.showChildNotification=true
    }
    notifyParentHandler(event){
        const showevent=new CustomEvent('show',{bubbles:true})
        this.dispatchEvent(showevent)
    }
}