import { LightningElement } from 'lwc';
import pubsubComponent from 'c/pubsubComponent';

export default class PubsubChildcomponent extends LightningElement {
    buttonHandler(event)
    {
        this.eventPublisher(event.target.innerText)
    }
    eventPublisher(data)
    {
        pubsubComponent.publish("accordianTriggered",data)
    }
}