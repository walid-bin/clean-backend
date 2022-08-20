const mongodb = require('./mongoDB/index');
const database = {
    mongodb
}

module.exports = database['mongodb'];