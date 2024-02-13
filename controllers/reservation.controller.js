// const { reset } = require("nodemon");
const Reservation = require("../models/reservation.model");

//create a reservation
async function CreateReservation(req, res) {
  try {
    const reservation = new Reservation(req.body);

    await reservation.save();

    res.status(201).json({
      message: "Reservation created successfully",
      reservation: reservation,
    });
  } catch (error) {
    console.log(error);
  }
}

//read all reservation
async function getReservation(req, res) {
  try {
    const reservation = await Reservation.find({});

    res.status(201).json({
      message: "Reservation read successfully",
      reservation,
    });
  } catch (err) {
    console.log(err);
  }
}

//get reservation by id

async function getReservationById(req, res) {
  const reservationId = req.params.id;
  const reservation = await Reservation.findById(reservationId);

  if (reservation) {
    res.status(200).json({
      message: "Reservation found by Id successfully",
      reservation,
    });
  } else {
    res.status(404).json({
      message: "Reservation not found",
    });
  }
}

//update reservation
async function updateReservation(req, res) {
  const reservation = await Reservation.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      returnDocument: "after",
    }
  );

  if (reservation) {
    res.status(200).json({
      message: "Reservation updated successfully",
      reservation,
    });
  } else {
    res.status(404).json({
      message: "Reservation not found",
    });
  }
}

//DELETE BY ID
async function deleteReservation(req, res) {
  const reservation = await Reservation.findByIdAndDelete(
    req.params.id,
    req.body
  );

  if (reservation) {
    res.status(201).json({
      message: "Reservation deleted successfully",
      reservation,
    });
  } else {
    res.status(404).json({
      message: "Reservation not found",
    });
  }
}

module.exports = {
  CreateReservation,
  getReservation,
  getReservationById,
  updateReservation,
  deleteReservation,
};
