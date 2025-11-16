const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');
require('dotenv').config();

// First, create database if it doesn't exist
const initializeDatabase = async () => {
  try {
    // Connect without specifying database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      port: process.env.DB_PORT || 3306
    });

    // Create database if not exists
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME || 'employee_management'}\`;`
    );
    console.log('✅ Database initialized');
    await connection.end();
  } catch (error) {
    console.error('❌ Database initialization error:', error.message);
    console.error('\n📝 Please check:');
    console.error('1. MySQL is running');
    console.error('2. Root password is correct in .env file');
    console.error('3. MySQL user has CREATE DATABASE privileges\n');
  }
};

// Create Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME || 'employee_management',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test connection and sync database
const connectDB = async () => {
  await initializeDatabase();
  
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');
    
    await sequelize.sync({ alter: false });
    console.log('✅ Database tables synchronized');
  } catch (error) {
    console.error('❌ Unable to connect to database:', error.message);
  }
};

connectDB();

module.exports = sequelize;
