import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Employee API methods
export const employeeService = {
    
  // Get all employees
  getAllEmployees: async () => {
    const response = await api.get('/employees');
    return response.data;
  },

  // Get all employees with search
  searchEmployees: async (searchTerm) => {
    const response = await api.get(`/employees?search=${searchTerm}`);
    return response.data;
  },

  // Get employees with pagination
  getEmployeesPaginated: async (page = 1, limit = 10) => {
    const response = await api.get(`/employees?page=${page}&limit=${limit}`);
    return response.data;
  },

  // Get employee by ID
  getEmployeeById: async (id) => {
    const response = await api.get(`/employees/${id}`);
    return response.data;
  },

  // Create new employee
  createEmployee: async (employeeData) => {
    const response = await api.post('/employees', employeeData);
    return response.data;
  },

  // Update employee
  updateEmployee: async (id, employeeData) => {
    const response = await api.put(`/employees/${id}`, employeeData);
    return response.data;
  },

  // Delete employee
  deleteEmployee: async (id) => {
    const response = await api.delete(`/employees/${id}`);
    return response.data;
  }
};

export default api;
