const express = require('express');
const routes = express.Router();
const {createStudent, updateStudent, deleteStudent, getStudent, getAllStudentsByClassId} = require('../controllers/Student');

routes.post('/student/createStudent',createStudent);
routes.patch('/student/updateStudent/:id',updateStudent);
routes.delete('/student/deleteStudent/:id',deleteStudent);
routes.get('/student/getStudent/:id',getStudent);
routes.get('/student/getAllStudentsByClassId/:classId',getAllStudentsByClassId)

module.exports = routes;