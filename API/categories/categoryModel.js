const db = require('../../data/dbConfig');

module.exports = {
  findAll,
  findById,
  addCategory,
};

function findAll() {
  return db('categories').select('categories');
}

function findById(id) {
  return db('categories')
    .where({ category_id: id })
    .select('category');
}

async function addCategory(category) {
  const [id] = await db('categories').insert(category);

  return findById(id);
}
