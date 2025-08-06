const express = require('express');
const router = express.Router();   
const businessController = require('../controllers/businessController.js');
const isAuthenticated = require('../middleware/isAuthenticated.js'); 
const isAdmin = require('../middleware/isAdmin.js'); 

router.route('/all').get(businessController.getAllBusinesses) 
router.route('/new').post(isAuthenticated, isAdmin, businessController.createBusiness);
router.route("/:id").get(isAuthenticated, businessController.getBusinessById); 

module.exports = router;