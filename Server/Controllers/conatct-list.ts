import express from 'express';

import Contact from '../Models/contact-details';

import { UserDisplayName } from '../Util';

export function DisplayContactList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Contact.find(function(err, contactsCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Contact List', page: 'contact-list', contacts: contactsCollection, displayName: UserDisplayName(req) });
    });
}
export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    Contact.findById(id, function(err:any, contactToEdit:any)
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('index', {title: 'Edit Contact', page: 'contact-edit', contact: contactToEdit, displayName: req.user ? UserDisplayName(req) : ''})
        }
    });
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id

    let updatedContact = new Contact({
        "_id": id,
        "Name": req.body.name,
        "ContactNumber": req.body.contactNumber,
        "Email": req.body.emailAddress,
        
    });

    Contact.updateOne({_id: id}, updatedContact, function(err:any)
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}

export function PerformDelete(req: express.Request, res: express.Response, next: express.NextFunction){
    let id = req.params.id;

    Contact.remove({_id: id}, function(err)
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the contact list
             res.redirect('/contact-list');
        }
    });
}