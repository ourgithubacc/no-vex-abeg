const express = require('express');
const { addCategory, deleteCategory, getAllCategories, updateCategory } = require('../controllers/category');
const router = express.Router();
const protect = require('../middleware/authMiddleware')


router.route('/addCategory').post(addCategory);
router.route('/deleteCategory').delete(deleteCategory)
router.route('/getAllCategories').get(getAllCategories)
router.route('/updateCategory').put(updateCategory);

module.exports = router;