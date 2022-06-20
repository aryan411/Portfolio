"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformDelete = exports.ProcessEditPage = exports.DisplayEditPage = exports.DisplayContactList = void 0;
const contact_details_1 = __importDefault(require("../Models/contact-details"));
const Util_1 = require("../Util");
function DisplayContactList(req, res, next) {
    contact_details_1.default.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contactsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayContactList = DisplayContactList;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact_details_1.default.findById(id, function (err, contactToEdit) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Edit Contact', page: 'contact-edit', contact: contactToEdit, displayName: req.user ? (0, Util_1.UserDisplayName)(req) : '' });
        }
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContact = new contact_details_1.default({
        "_id": id,
        "Name": req.body.name,
        "ContactNumber": req.body.contactNumber,
        "Email": req.body.emailAddress,
    });
    contact_details_1.default.updateOne({ _id: id }, updatedContact, function (err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contact-list');
        }
    });
}
exports.ProcessEditPage = ProcessEditPage;
function PerformDelete(req, res, next) {
    let id = req.params.id;
    contact_details_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contact-list');
        }
    });
}
exports.PerformDelete = PerformDelete;
//# sourceMappingURL=conatct-list.js.map