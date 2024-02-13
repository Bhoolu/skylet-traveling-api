const mongoose = require("mongoose");

const { schema } = require("mongoose");

const GuestSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phonenumber: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    nationality: {
      type: String,
      required: true,
    },

    passportoridcard: {
      type: String,
      required: true,
    },

    dateofbirth: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Guest = mongoose.model("Guest", GuestSchema);
module.exports = Guest;
