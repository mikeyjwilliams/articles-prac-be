const express = require('express');
const router = express.Router();
const dbCategory = require('./categoryModel');

/**
 * GET
 * Endpoint `/category`
 */

router.get('/', async (req, res) => {
  try {
    const categories = await dbCategory.findAllCategories();
    if (categories) {
      res.status(200).json(categories);
    } else {
      res.status(400).json({ message: 'error retrieving categories' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: 'server error, getting categories.' });
  }
});

/**
 * POST
 * endpoint: `/category/`
 */
router.post('/', async (req, res) => {
  try {
    if (!req.body.category) {
      res.status(400).json({ message: 'please enter a unique category.' });
    }
    const cat = {
      category: req.body.category,
    };
    const category = await dbCategory.addCategory(cat);
    if (category) {
      res.status(201).json(category);
    } else {
      res.status(400).json({ message: 'error, category could not be added' });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ errorMessage: 'server error Posting new category.' });
  }
});

router.update('/:id', async (req, res) => {
  if (!req.body.category) {
    res.status(400).json({ message: 'need unique category name for update.' });
  }
  const cat = {
    category: req.body.category,
  };
  try {
    const updatedCategory = await dbCategory.updateCategory(cat);
    if (updatedCategory) {
      res.status(200).json(updatedCategory);
    } else {
      res.status(400).json({ message: 'could not update category' });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ errorMessage: 'server error, while updating category.' });
  }
});

module.exports = router;
