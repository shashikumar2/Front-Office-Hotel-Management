const Worker = require("../models/worker");

module.exports.list = (req, res) => {
  Worker.find()
    .then((worker) => {
      res.json(worker);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Worker.findById(id)
    .then((worker) => {
      if (worker) {
        res.json(worker);
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
  const worker = new Worker(body);
  worker
    .save()
    .then((worker) => {
      res.json(worker);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Worker.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((worker) => {
      res.json(worker);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Worker.findByIdAndDelete(id)
    .then((worker) => {
      worker ? res.json(worker) : res.json({});
    })
    .catch((err) => {
      res.json(err);
    });
};