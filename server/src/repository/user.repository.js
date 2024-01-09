const { Table } = require("../db");


async function createUserDB(user) {
    await Table.create(user);
    const data = await Table.find();
    return data;
};

async function getByEmail(user) {
    const data = await Table.find({ email:user.email });
    return data;
};


module.exports = { createUserDB, getByEmail };