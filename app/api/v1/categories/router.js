const express = require('express');
const router = express();
const { index, create, find, update, destroy } = require('./controller');
const { authenticateUser, authorizeRoles } = require('../../../middlewares/auth');

// app.use(authenticateUser); bisa juga dengan autehnticat menggunakan cara ini
// Get Categories
router.get('/categories', authenticateUser, authorizeRoles('organizer'), index);
// Get categories by id
router.get('/categories/:id', authenticateUser, authorizeRoles('organizer'), find);
// Update Categories
router.put('/categories/:id', authenticateUser, authorizeRoles('organizer'), update);
// Delete categories by id
router.delete('/categories/:id', authenticateUser, authorizeRoles('organizer'), destroy);
// Create Categories
router.post('/categories', authenticateUser, authorizeRoles('organizer'), create);

module.exports = router;
