//===Require express and cors====
const express   = require('express');
const app       = express();
const cors      = require('cors');
const dal       = require('./dal.js');

//===Serve static files from the public directory===
app.use(express.static('public'));
app.use(cors());

//===Route to create new users based on 3 parameters=======
app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(
        req.params.name,
        req.params.email,
        req.params.password
        ).then((user) => {
            console.log(user);
            res.send(user);
        });
});

//===Route to login a user based on 2 parameters=======
app.get('/account/login/:email/:password', function(req, res) {
    res.send({
        email:      req.params.email,
        password:   req.params.password
    });
});

//===Route to view data store=======
app.get('/account/all', function(req, res) {
    dal.all().then((docs) => {
        console.log(docs);
        res.send(docs);
    });
});

const port = 3000;
app.listen(port);
console.log('running on port: ' + port);