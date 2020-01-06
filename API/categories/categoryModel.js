const db = require('../../data/dbConfig');

module.exports = {
  findAllCategories,
  findCategoryById,
  addCategory,
  updateCategory,
  removeCategory,
};

function findAllCategories() {
  return db('categories').select('categories');
}

function findCategoryById(catId) {
  return db('categories')
    .where({ category_id: catId })
    .select('category')
    .first();
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
