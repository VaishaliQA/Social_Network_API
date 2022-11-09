const { connect, connection } = require("mongoose");

// Connection string to local instance of MongoDB including database name
connect("mongodb://127.0.0.1:27017/social-network-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
