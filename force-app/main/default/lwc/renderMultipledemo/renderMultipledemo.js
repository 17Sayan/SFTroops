import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import defaultTemplate  from './renderMultipledemo.html'

export default class RenderMultipledemo extends LightningElement {
    selected=null;
    render(){
        return this.selected ==='Sign Up'? signupTemplate:
                this.selected ==='Sign In'? signinTemplate:
                    defaultTemplate
    }
    clickHandler(event)
    {
        this.selected=event.target.label

    }
    submitHandler(event)
    {
        if(event.target.label==='Sign In')
        {
            console.log("Login Successful")
        }
        else if(event.target.label==='Sign Up')
        {
            console.log("Sign Up Sucessful")
        }
        else
        {
            
        }
    }
}