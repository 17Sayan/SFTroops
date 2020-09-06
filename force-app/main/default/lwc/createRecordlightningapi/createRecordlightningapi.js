import { LightningElement } from 'lwc';
import {createrRecord} from 'lightning/uiRecordApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import name from '@salesforce/schema/Account.name'
import type from '@salesforce/schema/Account.type'
import phone from '@salesforce/schema/Account.phone'
import industry from '@salesforce/schema/Account.industry'

export default class CreateRecordlightningapi extends LightningElement {
    formField={
        Name:'',
        Type:'',
        Industry:'',
        Phone:''
    }
    changeHandler(event)
    {
        const {value,name}=event.target
        this.formField={...this.formField,[name]:value}
    }
    handlerSave()
    {
        const fields={}
        fields[name.fieldApiName]=this.formField.name
        fields[phone.fieldApiName]=this.formField.phone
        fields[type.fieldApiName]=this.formField.type
        fields[industry.fieldApiName]=this.formField.industry
        let recordInput={apiName:ACCOUNT_OBJECT.objectApiName,fields}
        createrRecord(recordInput).then(result=>{
            this.formField={}
            console.log('Account created id',JSON.stringify(result.id))
        }).catch(error=>{
            console.log('error')
        })
    }
}