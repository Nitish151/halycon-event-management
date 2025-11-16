const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Create a new employee
router.post('/employees', employeeController.createEmployee);

// Get all employees (supports ?search=term&page=1&limit=10)
router.get('/employees', employeeController.getAllEmployees);

// Get employee by ID
router.get('/employees/:id', employeeController.getEmployeeById);

// Update employee
router.put('/employees/:id', employeeController.updateEmployee);

// Delete employee
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
