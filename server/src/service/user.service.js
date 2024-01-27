const { getAllUserDB, getUserByIdDB, createUserDB, getByEmail } = require("../repository/user.repository");
const bcrypt = require('bcrypt');
const salt = 2;

async function getAllUser() {
    const data = await getAllUserDB();
    return data;
}

async function getUserById(_id) {
    const data = await getUserByIdDB(_id);
    return data;
}

async function createUser(user) {

    const found = await getByEmail(user);
    if (found.length) throw new Error('his user alredy exists');

    const hashPassword = await bcrypt.hash(user.password, salt)

    const data = await createUserDB({ ...user, password: hashPassword });
    if (!data.length) throw new Error('user not create');
    return data;
};

async function authUser(user) {

    const found = await getByEmail(user);
    if (!found.length) throw new Error('this email is invalid');
    if (!(await bcrypt.compare(user.password, found[0].password))) throw new Error('this password is invalid');

    return found;
};



module.exports = { getAllUser, getUserById, createUser, authUser };