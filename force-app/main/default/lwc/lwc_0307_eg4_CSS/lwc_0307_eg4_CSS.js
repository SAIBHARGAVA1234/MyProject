import { LightningElement,track } from 'lwc';

export default class Lwc_0307_eg4_CSS extends LightningElement 
{
    @track Name;
    callme(event)
    {
        this.Name= event.target.value;
    }

}