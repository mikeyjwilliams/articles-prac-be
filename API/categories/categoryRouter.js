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

router.post('/', async (req, res) => {
  try {
    if (!req.body.category) {
      res.status(400).json({ message: 'please enter a category.' });
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
