const express = require('express');
const router = express.Router();
const generateBusinessPlan = require('../controllers/businessPlanController');

router.post('/generate-business-plan', generateBusinessPlan.generateBusinessPlan);

module.exports = router;
