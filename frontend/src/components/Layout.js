import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-secondary shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <h1 className="text-2xl font-semibold text-white">👥 Employee Management System</h1>
        </div>
      </header>
      
      <nav className="bg-secondary-light shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/employees" 
                className={`block py-4 px-4 text-white hover:bg-secondary transition-colors ${
                  location.pathname === '/employees' ? 'bg-secondary' : ''
                }`}
              >
                Employee List
              </Link>
            </li>
            <li>
              <Link 
                to="/employees/add" 
                className={`block py-4 px-4 text-white hover:bg-secondary transition-colors ${
                  location.pathname === '/employees/add' ? 'bg-secondary' : ''
                }`}
              >
                Add Employee
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}

export default Layout;
