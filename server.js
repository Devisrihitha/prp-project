const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Use your MySQL password here
    database: 'product_review_db'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Route to get all products
app.get('/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Route to get reviews for a specific product
app.get('/products/:id/reviews', (req, res) => {
    const productId = req.params.id;
    const query = 'SELECT * FROM reviews WHERE product_id = ?';
    db.query(query, [productId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Route to add a new review
app.post('/products/:id/reviews', (req, res) => {
    const productId = req.params.id;
    const { rating, comment } = req.body;
    const query = 'INSERT INTO reviews (product_id, rating, comment) VALUES (?, ?, ?)';
    db.query(query, [productId, rating, comment], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Review added successfully', reviewId: results.insertId });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
