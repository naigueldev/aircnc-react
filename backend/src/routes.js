const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const upload = multer(uploadConfig);

// req.query = Access query params (for filters)
// req.params = Access route params (for edit, delete)
// req.body = Access request body (for create , edit)

// routes.get('/users', (req, res) => {
//     return res.json({ idade: req.query.idade });
// });


// routes.put('/users/:id', (req, res) => {
//     return res.json({ id: req.params.id });
// });


routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

module.exports = routes;