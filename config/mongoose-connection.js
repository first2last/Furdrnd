const mongoose = require('mongoose');
const debug = require('debug')('development:mongoose');

// Use environment variable directly
const dbURI = `${process.env.MONGODB_URI}/Scratch`;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    debug('MongoDB connected successfully');
})
.catch((err) => {
    debug('MongoDB connection error:', err);
});

module.exports = mongoose.connection;
