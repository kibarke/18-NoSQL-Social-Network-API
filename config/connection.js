const mongoose = require('mongoose');

// Connecting to the MongoDB database using the URI or 
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://127.0.0.1:27017/batNetworkDB').
catch(error => handleError(error));

    mongoose.connection.on('error', err => {
        logError(err);
      });

// Export connection
module.exports = mongoose.connection;

// TODO: name database => 'batNetworkDB'