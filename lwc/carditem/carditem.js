import { LightningElement, api, track } from 'lwc';
import picture from '@salesforce/resourceUrl/avatar';

export default class carditem extends LightningElement {
    clickCount = 0;
    logoURL = picture;
    @track openmodel = false;
    @api product;
 
    contactClick() {
       this.clickCount++;
                setTimeout(() => {
                    if (this.clickCount === 2) {
                        console.log("doubleclick!");
                      this.openmodel = true
                }
                this.clickCount = 0;
                }, 250)
     }

    handleCloseModal(event) {
        this.openmodel = event.detail.modalstatus;
    }

    handleCardValues(event) {
        this.product = event.detail;
        console.log("FROM HANDLE CARD EVENT!" + JSON.stringify(event.detail));
    }
}