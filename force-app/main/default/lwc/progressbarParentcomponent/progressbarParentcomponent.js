import { LightningElement } from 'lwc';

export default class ProgressbarParentcomponent extends LightningElement {
    percentage=10
    changeHandler(event)
    {
        this.percentage=event.target.value<=100?event.target.value:100
    }
}