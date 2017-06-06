/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /polls              ->  index
 * POST    /polls              ->  create
 * GET     /polls/:id          ->  show
 * PUT     /polls/:id          ->  update
 * DELETE  /polls/:id          ->  destroy
 */
'use strict'

const Poll = require('./poll.model')

// Get list of polls
exports.index = function (req, res) {
  Poll.find(function (err, polls) {
    if (err) {
      return handleError(res, err)
    }
    return res.status(200).json({ results: polls })
  })
}

// Get a single poll
exports.show = function (req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if (err) return handleError(res, err)
    if (!poll) return res.send(404)
    return res.json(poll)
  })
}

// Creates a new poll in the DB
exports.create = function (req, res) {
  Poll.create(req.body, function (err, poll) {
    if (err) return handleError(res, err)
    return res.status(200).json(poll)
  })
}

// Deletes a poll
exports.destroy = function (req, res) {
  Poll.remove({ _id: req.params.id }, function (err, poll) {
    if (err) return handleError(res, err)
    if (!poll) return res.send(404)
    return res.json(poll)
  })
}

exports.update = function (req, res) {
  Poll.update({ _id: req.params.id }, req.body, function (err, poll) {
    if (err) return handleError(res, err)
    return res.status(200).json(poll)
  })
}

function handleError (res, err) {
  return res.status(500).send(err)
}
{}
