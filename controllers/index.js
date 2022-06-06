// <!--     Author- Aryan Patel       -->
// <!--     StudentID-301226774     -->

var express = require('express');
var router = express.Router();



module.exports.displayHomePage = (req, res, next) => {
    res.render('main', { title: 'home' });
}
module.exports.displayAboutMePage = (req, res, next) => {
    res.render('main', { title: 'about' });
}
module.exports.displayProductsPage = (req, res, next) => {
    res.render('main', { title: 'projects' });
}
module.exports.displayServicesPage = (req, res, next) => {
    res.render('main', { title: 'services' });
}
module.exports.displayContactsPage = (req, res, next) => {
    res.render('main', { title: 'contacts' });
}
