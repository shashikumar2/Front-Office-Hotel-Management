const Bill = require("../models/bill");

module.exports.list = (req, res) => {
  Bill.find()
    .then((bill) => {
      res.json(bill);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Bill.findById(id)
    .then((bill) => {
      if (bill) {
        res.json(bill);
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
  const bill = new Bill(body);
  bill
    .save()
    .then((bill) => {
      res.json(bill);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Bill.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((bill) => {
      res.json(bill);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Bill.findByIdAndDelete(id)
    .then((bill) => {
      bill ? res.json(bill) : res.json({});
    })
    .catch((err) => {
      res.json(err);
    });
};