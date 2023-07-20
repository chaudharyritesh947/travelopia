const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');


const url = 'mongodb+srv://ritesh99:P4od5XoK1xh4LBzy@cluster0.0gsr7vp.mongodb.net/travelopia?retryWrites=true&w=majority'; 
const dbName = 'travelopia'; // Replace this with your database name
//

// Connect to MongoDB

async function connectToMongoDB() {
    mongoose.connect(`${url}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.error('Error connecting to MongoDB:', err));      
}

module.exports = { connectToMongoDB };


