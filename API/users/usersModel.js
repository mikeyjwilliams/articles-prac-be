const db = require('../../data/dbConfig');

module.exports = {

}

function find(query = {}) {
    const { sortby = 'id', sortdir = 'asc' } = query;
    return db('users').orderBy(sortby, sortdir).select('email', 'text', 'created_at', 'updated_at', 'user_id');

}

function findByID(id) {
    return db('users').where({ user_id: id }).select().first();
}

async function addUser(user) {
    const [id] = await db('users').insert(user);

    return findByID(id);
}

