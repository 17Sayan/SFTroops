import { LightningElement } from 'lwc';
import pubsubComponent from 'c/pubsubComponent'
export default class PubsubChild2component extends LightningElement {
    accordionList = [
        {
            id: 1,
            name: 'Success',
            selected: false,
            className: 'accordion success'
        },
        {
            id: 2,
            name: 'Info',
            selected: false,
            className: 'accordion info'
        },
        {
            id: 3,
            name: 'Warning',
            selected: false,
            className: 'accordion warning'
        },
        {
            id: 4,
            name: 'Danger',
            selected: false,
            className: 'accordion danger'
        }
    ];
    connectedCallback()
    {
        this.callsubscriber()
    }
    callsubscriber()
    {
        pubsubComponent.subscribe('accordianTriggered',this.subscribercallback)
    }
    subscribercallback(event)
    {
        let updatedList=this.accordianList.map(item=>
            {
                return item.name===event?{...item,selected:true}:{...item,selected:false }
            })
            this.accordianList=[...updatedList]
    }
}