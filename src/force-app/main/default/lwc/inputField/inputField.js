import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class InputField extends LightningElement {
    @api recordId
    @api objectApiName;
    @api targetField;

    handleSuccess(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: event.detail.apiName + ' saved',
                variant: 'success',
            }),
        );
    }

    
}