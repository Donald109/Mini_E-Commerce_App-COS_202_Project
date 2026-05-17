const express = require('express');
const router = express.Router();

// GET all products
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: "MacBook Pro M3", price: 1200, category: "laptop" },
    { id: 2, name: "iPhone 15 Pro", price: 999, category: "phone" }
  ]);
});

// GET product by category
router.get('/category/:categoryName', (req, res) => {
  const requestedCategory = req.params.categoryName;

  res.json({
    message: `You asked for ${requestedCategory}s!`,
    data: [{ id: 1, name: `Fake ${requestedCategory}`, price: 500 }]
  });
});

// GET single product by ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;

  res.json({
    id: productId,
    name: "Sample Product",
    price: 750
  });
});

// ✅ PUT THE POST ROUTE HERE
router.post('/', (req, res) => {
  const newProduct = req.body;

  res.status(201).json({
    message: "Product created successfully",
    data: newProduct
  });
});

module.exports = router;