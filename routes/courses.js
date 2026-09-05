const express = require('express');

const router = express.Router();  

const courses = [
    { id: 1, name: 'Frontend', description: "HTML, CSS, JS, React" },
    { id: 2, name: 'Backend', description: "Node.js, Express, MongoDB" }
];

//GET /courses
router.get('/', (req, res) => {
    const courseNames = courses.map(course => course.name).join(', ');
    res.send(`Courses : ${courseNames}`);
});

//GET /courses/:courseId
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(course => course.id === id);
    if (!course) {
        res.send(`Course not found!`);
    }
    else{
        res.send(`Course: ${course.name}, Description: ${course.description}`)
    }
});

module.exports = router;