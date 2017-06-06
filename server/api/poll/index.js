'use strict'

const express = require('express')
const controller = require('./poll.controller')
// const auth = require('../../auth/auth.service')

const router = express.Router()

router.get('/', controller.index)
router.get('/:id', controller.show)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.destroy)

module.exports = router
