const express = require('express');

const app = express();

const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});