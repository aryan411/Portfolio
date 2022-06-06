
// <!--     Author- Aryan Patel       -->
// <!--     StudentID-301226774     -->

const express = require('express');
const path = require('path');

const app = express();

// Load router
const Router = require('./routes');

// handling static folder
//app.use('*/js', express.static(path.join(__dirname, 'public/js')));
//app.use('*/css', express.static(path.join(__dirname, 'public/css')));
//app.use('*/img', express.static(path.join(__dirname, 'public/img')));


// Handlebars Middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use('/', Router);
app.use(express.static(path.join(__dirname, 'public')));

// Use routes

// app.use('/about', about);
// app.use('/portfolio', myWork);
// app.use('/contact', contact);
// app.use('/service', service);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on ${port}`);
})
