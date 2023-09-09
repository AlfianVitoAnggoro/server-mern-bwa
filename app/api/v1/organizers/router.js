const express = require('express');
const router = express();
const { getCMSUsers, createCMSOrganizer, createCMSUser } = require('./controller');
const { authenticateUser, authorizeRoles } = require('../../../middlewares/auth');

// Create Categories
router.post('/organizers', authenticateUser, authorizeRoles('owner'), createCMSOrganizer);
router.post('/users', authenticateUser, authorizeRoles('organizer'), createCMSUser);
router.get('/users', authenticateUser, authorizeRoles('owner'), getCMSUsers);

module.exports = router;
