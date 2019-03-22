const express = require("express");
const app = express();
const port = 3000;
const axios = require('axios');
const db = require('mysql');
const bodyParser = require('body-parser');

const connection = db.createConnection({
    user: 'root',
    database: 'checkout_data'
});

connection.connect((err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to db')
    }
})


app.use(express.static('./public'));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
    console.log(req.body);
    connection.query(
        `INSERT INTO users (name, password, email) VALUES ('${req.body.name}', '${req.body.password}', '${req.body.email}')`,
        (err, data, fields)=>{
            if (err) {
                return err;
            }

        })
    res.end();
});

app.listen(port, () => {console.log(`Listening on port ${port}`)});