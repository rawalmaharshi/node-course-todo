var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PROD_MONGODB, {
    useMongoClient: true
});

module.exports = {mongoose};
