const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


const PORT = 2000;


app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));


const con = require('./db');

app.get('/user', (req, res) => {
    res.sendFile(__dirname + '/registerUser.html');
});

app.post('/user', (req, res) => {

    var userid = req.body.id;
    var username = req.body.name;
    var userAddressId = req.body.addressId;

    var AddressId = req.body.addressId;
    var Address = req.body.address;
    console.log({userid, username, AddressId, Address});


    const q1 = "INSERT INTO address (`addressId`, `address`) VALUES ( ? , ?)";

    con.query(q1,[AddressId, Address], (err, doc) => {
        if (!err) { res.status(200); }
        else { console.log('Error in User insert :' + JSON.stringify(err, undefined, 2)); }
    });
  
    const q2 = "INSERT INTO users (`id`, `name`, `addressId`) VALUES ( ?, ?, ?)"
    

    con.query(q2,[userid, username, userAddressId], (err, doc) => {
        if (!err) { res.status(200); }
        else { console.log('Error in User insert :' + JSON.stringify(err, undefined, 2)); }
    });
});




