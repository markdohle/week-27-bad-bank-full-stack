//Backend Server - Node Express Application
//===Require express and cors====
const express   = require('express');
const app       = express();
const cors      = require('cors');
const dal       = require('./dal.js');

//===Serve static files from the public directory===
app.use(express.static('public'));
app.use(cors());

//===Route to create new users based on 3 parameters=======
app.get('/account/create/:name/:email/:password', function (req, res) {     //<-----call function that returns promise from dal.js
    dal.create(                 //<----Calls the create(name,email,password) function from dal.js.
        req.params.name,        
        req.params.email,
        req.params.password
        ).then((user) => {          //<-----Then handle the returning promosie from the create() function in dal.js. "user" can be any word.
            console.log(user);      //<-----See the user information in the console to make sure everything is working
            res.send(user);         //<-----Respond to the front end
        });
});

//===Route to login a user based on 2 parameters=======
app.get('/account/login/:email/:password', function(req, res) {
    dal.find(
        req.params.email
    ).then((user) => {
        console.log(user);
        res.send(user)
    });
});

//===Route to view data store=======
app.get('/account/all', function(req, res) {        
    dal.all().then((docs) => {      //<-----Calls the all() function from dal.js.
        console.log(docs);          //<-----See all the users in the console to make sure everything is working
        res.send(docs);             //<-----Respond to the front end
    });
});

//======Route to update balance=========
app.get('/account/balance/:email/:amount', function(req, res) {        
    dal.update(
        req.params.email,
        Number(req.params.amount)
    ).then((documents) => {  
       console.log(documents);          //<-----See all the users in the console to make sure everything is working
       res.json(documents);           //<-----Respond to the front end
    });
});

const port = 3000;
app.listen(port);
console.log('running on port: ' + port);