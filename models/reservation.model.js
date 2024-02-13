const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ReservationSchema = mongoose.Schema(
  {
    Reservation: {
      type: String,
      required: true,
    },

    property: {
      type: String,
      required: true,
    },

    Numberofguest: {
      type: Number,
      required: true,
    },

    Reasonforvisit: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", ReservationSchema);
module.exports = Reservation;
