const express = require('express');
const routes = express.Router();
const {createTeacher, updateTeacher, deleteTeacher, getTeacher} = require('../controllers/Teacher');

routes.post('/teacher/createTeacher',createTeacher);
routes.patch('/teacher/updateTeacher/:id',updateTeacher);
routes.delete('/teacher/deleteTeacher/:id',deleteTeacher);
routes.get('/teacher/getTeacher/:id',getTeacher);

module.exports = routes;