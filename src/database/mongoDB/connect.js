const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL,
            { useNewUrlParser: true, useUnifiedTopology: true },
            (err) => {
                if (err) throw new Error(err);
            }
        )
        return console.log('mongodb connected!')
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


module.exports = connect