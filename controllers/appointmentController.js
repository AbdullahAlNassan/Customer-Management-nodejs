const Appointment = require("../models/appointmentSchema");
var moment = require("moment");

const appointment_index_get = (req, res) => {
  Appointment.find()
    .sort({ date: 1, time: 1 }) // Sort by date and time
    .then((result) => {
      res.render("appointments/index", { appointments: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const appointment_create_get = (req, res) => {
  res.render("appointments/create");
};

const appointment_create_post = (req, res) => {
  Appointment.create(req.body)
    .then(() => {
      res.redirect("/appointments");
    })
    .catch((err) => {
      console.log(err);
      res.render("appointments/create", { error: "Error creating appointment" });
    });
};

const appointment_edit_get = (req, res) => {
  Appointment.findById(req.params.id)
    .then((result) => {
      res.render("appointments/edit", { appointment: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const appointment_edit_put = (req, res) => {
  Appointment.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.redirect("/appointments");
    })
    .catch((err) => {
      console.log(err);
    });
};

const appointment_delete = (req, res) => {
  Appointment.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/appointments");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  appointment_index_get,
  appointment_create_get,
  appointment_create_post,
  appointment_edit_get,
  appointment_edit_put,
  appointment_delete
};