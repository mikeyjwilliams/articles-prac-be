const db = require('../../data/dbConfig');

module.exports = {
  findAllCategory,
  findCategoryById,
  addCategory,
  updateCategory,
  removeCategory,
};

function findAllCategory() {
  return db('categories').select('categories');
}

function findCategoryById(id) {
  return db('categories')
    .where({ category_id: id })
    .select('category');
}

async function addCategory(category) {
  const [id] = await db('categories').insert(category);

  return findCategoryById(id);
}

async function updateCategory(id, category) {
  await db('categories')
    .where({ category_id: id })
    .update(category);

  return findCategoryById(id);
}

function removeCategory(id) {
  return db('categories')
    .where({ category_id: id })
    .del();
}
