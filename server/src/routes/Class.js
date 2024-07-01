const express = require('express');
const routes = express.Router();
const {createClass,updateClass,deleteClass,getClass,getAllClasses} = require('../controllers/Class');


routes.post('/class/createClass',createClass);
routes.patch('/class/updateClass/:id',updateClass);
routes.delete('/class/deleteClass/:id',deleteClass);
routes.get('/class/getClass/:id',getClass);
routes.get('/class/getAllClasses',getAllClasses)


module.exports = routes;