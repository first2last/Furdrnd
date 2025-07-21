const mongoose = require('mongoose');
const debug = require('debug')('development:mongoose');

// Prefer using environment variable, fallback to config if available
const dbUri = process.env.MONGODB_URI || require('config').get('MONGODB_URI');

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    debug('✅ MongoDB connected successfully');
})
.catch((err) => {
    debug('❌ MongoDB connection error:', err);
});

// Optional: log disconnects
mongoose.connection.on('disconnected', () => {
    debug('❌ MongoDB disconnected');
});

module.exports = mongoose.connection;
