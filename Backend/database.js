const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Nabeel:Nusrat%4025@nabeelcluster.qoyfq2x.mongodb.net/"
);

const AccountSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: 8,
  },
});

const account = mongoose.model("Accounts", AccountSchema);

module.exports = {
  account,
};
