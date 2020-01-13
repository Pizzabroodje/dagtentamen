

const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const path = require('path');


var session = require('express-session');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

const mysql = require('mysql2');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'SQLww',
    database : 'dagtentamen'
});

const models = require('../models/');
let items;

models.Item.findAll()
    .then(result => {
        console.log(result)
        items = result;
    })
    .catch(err => {
        console.log(err);
    });

// app.post('/auth', function(request, response) {
//     var username = request.body.username;
//     var password = request.body.password;
//     if (username && password) {
//         connection.query('SELECT * FROM employees WHERE naam = ? AND pincode = ?', [username, password], function(error, results, fields) {
//             if (results.length > 0) {
//                 request.session.loggedin = true;
//                 request.session.loggedinId = results[0].id;
//                 request.session.username = username;
//                 response.redirect('/');
//             } else {
//                 response.send('Incorrect Username and/or Password!');
//             }
//             response.end();
//         });
//     } else {
//         response.send('Please enter Username and Password!');
//         response.end();
//     }
// });

router.get('/login', (req, res) => {
    res.render('login');
});

//allConferences
router.get('/', (req, res) => {
    if(req.session.loggedin) {
        res.render('employee/index', {
            items: items
        });
    } else {
        res.render('login');
    }
});

module.exports = router;