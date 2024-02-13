//IF YOU DON'T PRATICE YOU CAN'T KNOW IT!
//PRATICE!!!!!!!!

const express = require("express");
const mongoose = require("mongoose");

const {
  CreateReservation,
  getReservation,
  getReservationById,
  updateReservation,
  deleteReservation,
} = require("./controllers/reservation.controller");

const {
  CreateGuest,
  getGuest,
  getGuestById,
  updateGuest,
  deleteGuest,
} = require("./controllers/guest.controller");
const skylet = express();
const PORT = 5500;

skylet.use(express.json());

//create a new reservation

skylet.post("/Reservation", CreateReservation);

//get or read reservation
skylet.get("/Reservation", getReservation);

//get reservatipn by Id
skylet.get("/Reservation/: id", getReservationById);

//update reservation
skylet.put("/Reservation/:id", updateReservation);

//delete reservation
skylet.delete("/Reservation/:id", deleteReservation);

//guest account creation
skylet.post("/Guest", CreateGuest);

//get all guest accounts
skylet.get("/Guest", getGuest);

//get guest infor by id
skylet.get("/Guest/:id", getGuestById);

//update guest information
skylet.put("/Guest/:id", updateGuest);

//delete guest information
skylet.delete("/Guest/:id", deleteGuest);
skylet.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});
async function main() {
  await mongoose.connect("mongodb://localhost/SKYLET");
  console.log("DB CONNECTED");
}
skylet.listen(PORT, () => {
  main().catch((err) => console.log(err));
  console.log("server listening on port 5500");
});
