import { LightningElement, api } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { NavigationMixin } from "lightning/navigation";

export default class ContactEditForm extends LightningElement {
    @api openmodel;
    @api contactid;
    objectApiName = CONTACT_OBJECT;




    handleCloseModal() {
        this.openmodel = false;
        const event = new CustomEvent("closemodalvalue", {
            detail:  this.openmodel
        });
        this.dispatchEvent(event);
    }

    handleSubmit() {
        this.openmodel = false;
        const event = new CustomEvent("closemodalvalue", {
            detail: { modalstatus: this.openmodel}
        });
        this.dispatchEvent(event);
    }

    handleSuccess(event) {
        let fullName = event.detail.fields.FirstName.value + " " + event.detail.fields.LastName.value;
          const cardvalues = new CustomEvent("cardvalues", {
            detail: 
            {
                Id: event.detail.id,
                Name : fullName,
                Email : event.detail.fields.Email.value,
                Phone: event.detail.fields.Phone.value,
                AccountId: event.detail.fields.AccountId.value,
                
            }
        });
        this.dispatchEvent(cardvalues);
    }

}

