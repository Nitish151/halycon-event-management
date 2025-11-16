# Employee Management System

A full-stack Employee Management System built with **Node.js (Express)**, **MySQL**, and **React**.

## Features

### Backend
- RESTful API with Express.js & **Sequelize ORM**
- MySQL with auto-sync (database & tables created automatically)
- Complete CRUD operations with built-in validation
- Clean MVC architecture & environment configuration

### Frontend
- React with **Tailwind CSS** for modern UI
- Employee List, Add, Edit, and Delete functionality
- Axios for API communication & responsive design

### Bonus Features 
- **Auto-migration** - No manual database setup
- **Search & Pagination** - Filter and navigate records
- **Form validation** - Client and server-side
- **Loading & Error states** - User-friendly feedback

## Project Structure

```
employee-management-system/
├── backend/
│   ├── config/
│   │   └── database.js         # Sequelize configuration
│   ├── controllers/
│   │   └── employeeController.js
│   ├── models/
│   │   └── Employee.js         # Sequelize model
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Layout.js
    │   │   └── LoadingSpinner.js
    │   ├── pages/
    │   │   ├── EmployeeList.js
    │   │   ├── AddEmployee.js
    │   │   └── EditEmployee.js
    │   ├── services/
    │   │   └── api.js
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── .gitignore
    └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

### Step 1: Clone the Repository
```bash
git clone 
cd employee-management-system
```

### Step 2: Backend Setup

1. **Navigate to backend folder:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
# Copy the example file
copy .env.example .env

# Or create .env manually with these values:
```

Edit `.env` file with your MySQL credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=employee_management
DB_PORT=3306
PORT=5000
```

4. **Start the backend server:**
```bash
# Development mode with auto-restart
npm run dev

# Or production mode
npm start
```

The backend server will run on **http://localhost:5000**

### Step 3: Frontend Setup

1. **Open a new terminal and navigate to frontend folder:**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the React development server:**
```bash
npm start
```

The frontend will run on **http://localhost:3000** and automatically open in your browser.

## API Endpoints

**Base URL:** `http://localhost:5000/api/employees`

```bash
# Create Employee
POST /api/employees
{
  "name": "John Doe",
  "email": "john@example.com",
  "department": "Engineering",
  "salary": 75000
}

# Get All Employees
GET /api/employees

# Search Employees
GET /api/employees?search=John

# Get Paginated Employees
GET /api/employees?page=1&limit=10

# Get Employee by ID
GET /api/employees/1

# Update Employee
PUT /api/employees/1
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "department": "Engineering",
  "salary": 80000
}

# Delete Employee
DELETE /api/employees/1
```

## Testing

- **Backend**: Test API endpoints at `http://localhost:5000/api/employees` using Postman or curl
- **Frontend**: Navigate to `http://localhost:3000` to view, add, edit, delete, and search employees


## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Sequelize** - ORM for MySQL
- **dotenv** - Environment variables
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework


## Troubleshooting

### MySQL Connection Error
- Verify MySQL is running
- Check credentials in `.env`
- Ensure database exists

### Port Already in Use
- Backend: Change `PORT` in `.env`
- Frontend: Set `PORT=3001` before running `npm start`

### CORS Issues
- Ensure backend CORS is enabled
- Check proxy setting in frontend `package.json`


## 🎥 Live URL

[https://halycon-event-management-9652nyia9.vercel.app/](https://halycon-event-management-9652nyia9.vercel.app/)
---

