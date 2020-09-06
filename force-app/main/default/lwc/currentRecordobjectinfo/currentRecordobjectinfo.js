import { LightningElement,api } from 'lwc';
import user_Id from '@salesforce/user/Id'
export default class CurrentRecordobjectinfo extends LightningElement {
    @api recordId
    @api objectApiName
    userId=user_Id
}