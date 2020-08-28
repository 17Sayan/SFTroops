import { LightningElement,track } from 'lwc';

export default class TemplateConditnlrendering extends LightningElement {
 @track showtext=false;
 @track hidetext=true;
 @track hide1text={result:false};
    showhandler()
    {
        this.showtext=true;
    }
    showhandler1()
    {
        this.hidetext=false;
    }
    showhandler2()
    {
        this.hide1text.result=true;
    }
}