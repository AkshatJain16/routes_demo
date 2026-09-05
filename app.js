const express = require('express');

const app = express();

const coursesRouter = require('./routes/courses');
const studentsRouter = require('./routes/students');

//Home Route
app.get('/', (req, res) => {
    res.send(`Welcome to the Student and Course Portal API!`);
});

//Courses Route
app.use('/courses', coursesRouter);

//Students Route
app.use('/students', studentsRouter);

//Invalid Route
app.use((req, res) => {
    res.status(404).send(`Page not found!`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});