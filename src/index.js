// require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const db = require('./database/index');


const main = async () => {
    try {
        const connection = await db.conncetMongo();
        app.listen(PORT, () => {

            console.log('Server is up on port =>', PORT)
        })
    } catch (error) {
        console.log(error)
    }
}


main();