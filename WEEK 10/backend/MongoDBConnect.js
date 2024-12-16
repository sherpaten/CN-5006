let mongoose = require('mongoose');
const MONG_URI = 'mongodb://localhost:27017/yourDatabaseName'; // Replace 'yourDatabaseName' with the actual database name
mongoose.connect(MONG_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true, // It's a good practice to include this option
    authSource: 'admin'
})
.then(() => {
    console.log('Connection is successful to ' + MONG_URI);
})
.catch(err => {
    console.log('Error occurred: ' + err);
});

const db = mongoose.connection;