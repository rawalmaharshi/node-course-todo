const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

//jwt.sign , jwt.verify

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded: ', decoded);
