const Booking = require("../models/booking");

module.exports.list = (req, res) => {
  Booking.find()
    .then((booking) => {
      res.json(booking);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Booking.findById(id)
    .then((booking) => {
      if (booking) {
        res.json(booking);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  
  const body = req.body;
  const booking = new Booking(body);
  booking.save()    
    .then((booking) => {
      res.json(booking);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Booking.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((booking) => {
      res.json(booking);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Booking.findByIdAndDelete(id)
    .then((booking) => {
      booking ? res.json(booking) : res.json({});
    })
    .catch((err) => {
      res.json(err);
    });
};