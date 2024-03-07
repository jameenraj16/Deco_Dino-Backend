require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://admin:Yjlmso0dL0RcX9Hq@daino.5rd7esy.mongodb.net/?retryWrites=true&w=majority&appName=daino`;
//Yjlmso0dL0RcX9Hq

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
