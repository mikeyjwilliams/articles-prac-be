const db = require('../../data/dbConfig');

module.exports = {

}

function find(query = {}) {
    const { sortby = 'user_id', sortdir = 'asc' } = query;
    return db('users').orderBy(sortby, sortdir).select('email', 'text', 'created_at', 'updated_at', 'user_id');

}

function findByID(id) {
    return db('users').where({ user_id: id }).select().first();
}

async function addUser(user) {
    const [id] = await db('users').insert(user);

    return findByID(id);
}

function remove(id) {
    return db('users').where({ user_id: id }).del()
}

async function update(id, user) {
    await db('users').where({ user_id: id }).update(user);

    return findByID(id);
}