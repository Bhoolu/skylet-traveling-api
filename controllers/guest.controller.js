const Guest = require("../models/guest.model");

//create guest infromation
async function CreateGuest(req, res) {
  try {
    const guest = new Guest(req.body);
    await guest.save();

    res.status(200).json({
      message: "Guest created successfully",
      guest,
    });
  } catch (error) {
    console.log(error);
  }
}

//read/get all guest accounts
async function getGuest(req, res) {
  try {
    const guest = await Guest.find({});

    res.status(202).json({
      message: "All guest account",
      guest,
    });
  } catch (error) {
    console.log(error);
  }
}
//get information by id
async function getGuestById(req, res) {
  const guestId = req.params.id;
  const guest = await Guest.findById(guestId);

  if (guest) {
    res.status(200).json({
      message: "Guest information available by id",
      guest,
    });
  } else {
    res.status(404).json({
      message: "No information available",
    });
  }
}
//update guest
async function updateGuest(req, res) {
  const guest = await Guest.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "afterUpdate",
  });
  if (guest) {
    res.status(200).json({
      message: "Guest information updated successfully",
      guest,
    });
  } else {
    res.status(404).json({
      message: "Guest information not available",
    });
  }
}

//delete guest information
async function deleteGuest(req, res) {
  const guest = await Guest.findByIdAndDelete(req.params.id, req.body);

  if (guest) {
    res.status(200).json({
      message: "Guest information deleted successfully",
    });
  } else {
    res.status(404).json({
      message: "Guest information not found",
    });
  }
}

module.exports = {
  CreateGuest,
  getGuest,
  getGuestById,
  updateGuest,
  deleteGuest,
};
