const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { generateToken } = require('../helper/jwt');
const { getAllUser, getUserById, createUser, authUser, updateUser, deleteUserById } = require('../service/user.service');
const route = express.Router();
route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 400);
    }
})

route.get('/:_id', async (req, res) => {
    try {
        const data = await getUserById(req.params._id);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 400);
    }
})

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body)
        const token = generateToken(data[data.length - 1])
        res.cookie('Bearer', token, {
            httpOnly: false,
            secure: true,
        })
        buildResponse(res, data, 200)
    } catch (error) {
        buildResponse(res, error.message, 404)
    }
})

route.post('/auth', async (req, res) => {
    try {
        const data = await authUser(req.body)
        const token = generateToken(data[0])
        res.cookie('Bearer', token, {
            httpOnly: false,
            secure: true,
        })
        buildResponse(res, data, 200)
    } catch (error) {
        buildResponse(res, error.message, 404)
    }
})

route.put('/:_id', async (req, res) => {
    try {
        const data = await updateUser(req.params._id, req.body);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 400);
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteUserById(req.params._id);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 400);
    }
})

module.exports = route;