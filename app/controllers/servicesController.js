const Service = require("../models/service");

module.exports.list = (req, res) => {
  Service.find()
    .then((sevice) => {
      res.json(sevice);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Service.findById(id)
    .then((service) => {
      if (service) {
        res.json(service);
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
  const service = new Service(body);
  service
    .save()
    .then((service) => {
      res.json(service);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Service.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((service) => {
      res.json(service);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Service.findByIdAndDelete(id)
    .then((service) => {
      service ? res.json(service) : res.json({});
    })
    .catch((err) => {
      res.json(err);
    });
};