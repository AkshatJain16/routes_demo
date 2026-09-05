const express = require('express');

const router = express.Router();

const students = [

    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

//GET /students
router.get('/', (req, res) => {
    const studentNames = students.map(student => student.name).join(', ');
    res.send(`Students: ${studentNames}`);
});

//GET /students/:studentId
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(student => student.id === id);
    if (!student) {
        res.send(`Student not found!`);
    }
    else{
        res.send(`Student: ${student.name}`)
    }
});

module.exports = router;
