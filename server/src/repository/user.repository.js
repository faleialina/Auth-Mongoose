const { Table, ObjectId } = require('../db');

async function getAllUserDB() {
    const data = await Table.find();
    return data;
}

async function getUserByIdDB(_id) {
    const data = await Table.find({ _id: new ObjectId(_id) });
    return data;
}

async function createUserDB(user) {
    await Table.create(user);
    const data = await Table.find();
    return data;
};

async function getByEmail(user) {
    const data = await Table.find({ email:user.email });
    return data;
};


module.exports = {getAllUserDB, getUserByIdDB, createUserDB, getByEmail };