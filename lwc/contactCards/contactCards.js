import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/contactListController.getContacts';

export default class ContactCards extends LightningElement {
        @api recordId;
        @wire(getContacts, { accountId: '$recordId' })
        contacts;
 
}