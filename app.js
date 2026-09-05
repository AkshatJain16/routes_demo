const express = require('express');

const app = express();

const bookRouter = require('./routes/books');


app.use('/books', bookRouter);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});