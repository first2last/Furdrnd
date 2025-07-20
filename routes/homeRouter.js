const express = require('express');
const router = express.Router();
const Product = require('../models/product-model'); // Import your model
const dogModel = require('../models/dog-model'); // update path if needed

const { registerUser, loginUser, logout } = require('../controllers/authController');

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // ✅ Fetch from DB
        const dogs = await dogModel.find();
        res.render('index', { products, dogs });
; // ✅ Now products is defined
    } catch (err) {
        console.error("Home page error:", err);
        res.status(500).send("Server error loading homepage");
    }
});

module.exports = router;
