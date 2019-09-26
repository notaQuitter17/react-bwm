const config = require('./config/dev/dev');
const express = require('express');
const mongoose = require('mongoose');
const Rental = require('./models/rental');
const Fakedb = require('./fake-db');

const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    const fakeDb = new Fakedb();
    fakeDb.seedDb();
});
const app=express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=> console.log('App is running'));