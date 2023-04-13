const mongoose = require("mongoose");

const mongoURI = process.env.mongoURI

const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(async () => {
      console.log("connected to the database");
    })
    .catch((e) => {
      console.log("failed", e);
    });
};

module.exports = mongoDB;
