const express = require('express');
var bodyParser = require('body-parser');
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

const employeeRoutes = require('./routes/employee');
const itemRoutes = require('./routes/item');
const loginRoutes = require('./routes/login.js');

const sequelize = require('./utils/database');

// const Employee = require('./models/employee');
// const Item = require('./models/Item');
const models = require('./models/');

const mysql = require('mysql2');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'SQLww',
    database : 'dagtentamen'
});

let employees;

models.Employee.findAll({
    raw: true,
    attributes: [],
    include: [
        {
            model: models.Item
        }
    ]
})
.then(result => {
    console.log(result)
    employees = result;
})
    .catch(err => {
        console.log(err);
    });

let items;

models.Item.findAll()
    .then(result => {
        console.log(result)
        items = result;
    })
    .catch(err => {
        console.log(err);
    });

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/employee', employeeRoutes);
app.use('/item', itemRoutes);
app.use('/login', loginRoutes);

app.post('/auth', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        connection.query('SELECT * FROM employees WHERE naam = ? AND pincode = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.loggedinId = results[0].id;
                request.session.username = username;
                response.redirect('/employee');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

app.get('/', (req, res) => {
    // if(req.session.loggedin) {
        res.render('index', {
            items: items
        });
    // } else {
    //     res.send('Plase log in!');
    //     res.end();
    // }
});

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: 404
    });
});

sequelize.sync()
    .then(result => {
        console.log(result);
        app.listen(20070);
    })
    .catch(err =>{
        console.log(err);
    });

