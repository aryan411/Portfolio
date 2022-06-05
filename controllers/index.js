var express = require('express');
var router = express.Router();



module.exports.displayHomePage = (req, res, next) => {
    res.render('main', { title: 'home', displayName : req.user ? req.user.displayName : '' });
}
module.exports.displayAboutMePage = (req, res, next) => {
    res.render('main', { title: 'about', displayName : req.user ? req.user.displayName : ''  });
}
module.exports.displayProductsPage = (req, res, next) => {
    res.render('main', { title: 'projects', displayName : req.user ? req.user.displayName : ''  });
}
module.exports.displayServicesPage = (req, res, next) => {
    res.render('main', { title: 'services', displayName : req.user ? req.user.displayName : ''  });
}
module.exports.displayContactsPage = (req, res, next) => {
    res.render('main', { title: 'contacts', displayName : req.user ? req.user.displayName : ''  });
}
