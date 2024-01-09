const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { generateToken } = require('../helper/jwt');
const { createUser, authUser } = require('../service/user.service');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body)
        const token = generateToken(data[data.length-1])
        res.cookie('Bearer', token)
        buildResponse(res, data, 200)
    } catch (error) {
        buildResponse(res, error.message, 404)
    }
})
route.post('/auth', async (req, res) => {
    try {
        const data = await authUser(req.body)
        const token = generateToken(data[0])
        res.cookie('Bearer', token)
        buildResponse(res, data, 200)
    } catch (error) {
        buildResponse(res, error.message, 404)
    }
})

module.exports = route;