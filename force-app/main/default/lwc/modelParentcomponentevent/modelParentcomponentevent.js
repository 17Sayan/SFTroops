import { LightningElement } from 'lwc';

export default class ModelParentcomponentevent extends LightningElement {
    showModal = false
    showHandler() {
        this.showModal = true
    }
    modalCloseHandler(){
        this.showModal = false
    }
}

