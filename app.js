const express = require('express');

const app = express();
const port = 3000;

//Import Routes
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

//Error Handler
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use(express.static('public'));

//Use Routes
app.use('/api/cart', cartRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Route not Found');
    error.statusCode = 404;
    throw error;
});

//Error Handling Middleware
app.use(errorHandler);

//Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});