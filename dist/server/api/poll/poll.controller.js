
'use strict';

var Poll = require('./poll.model');

exports.index = function (req, res) {
  Poll.find(function (err, polls) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json({ results: polls });
  });
};

exports.show = function (req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if (err) return handleError(res, err);
    if (!poll) return res.send(404);
    return res.json(poll);
  });
};

exports.create = function (req, res) {
  Poll.create(req.body, function (err, poll) {
    if (err) return handleError(res, err);
    return res.status(200).json(poll);
  });
};

exports.destroy = function (req, res) {
  Poll.remove({ _id: req.params.id }, function (err, poll) {
    if (err) return handleError(res, err);
    if (!poll) return res.send(404);
    return res.json(poll);
  });
};

exports.update = function (req, res) {
  Poll.update({ _id: req.params.id }, req.body, function (err, poll) {
    if (err) return handleError(res, err);
    return res.status(200).json(poll);
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
{}
//# sourceMappingURL=poll.controller.js.map