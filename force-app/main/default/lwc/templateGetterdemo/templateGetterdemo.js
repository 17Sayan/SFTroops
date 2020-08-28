import { LightningElement } from 'lwc';

export default class TemplateGetterdemo extends LightningElement {

    title="this is the Getter method"
    selectdbtn=""
    get getGetter()
    {
       return  this.title.toUpperCase();
    }
    get buttonstatus()
    {
        
        return this.selectdbtn==='ON'?'box green':'box red'
    }    
   clickhandler(event)
   {
       console.log(event.currentTarget.innerText)
       this.selectdbtn=event.currentTarget.innerText
   }
}