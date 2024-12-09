const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

// GET routes
router.get("/", appointmentController.appointment_index_get);
router.get("/create", appointmentController.appointment_create_get);
router.get("/edit/:id", appointmentController.appointment_edit_get);

// POST routes
router.post("/create", appointmentController.appointment_create_post);

// PUT routes
router.put("/edit/:id", appointmentController.appointment_edit_put);

// DELETE routes
router.delete("/:id", appointmentController.appointment_delete);

module.exports = router;