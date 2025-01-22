/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 font-outfit dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://www.minubumwe.gov.rw/index.php?eID=dumpFile&t=f&f=1141&token=688d2042f97d54e42e581d5d7b0f29b4295d2500"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
              IVOMO
            </span>
          </NavLink>

          {/* Language and gov.rw links */}
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              English
            </a>
            <a
              href="#"
              className="text-gray-800 border-l border-gray-400 font-bold dark:border-gray-700 px-2 -mx-3"
            >
              gov.rw
            </a>

            {/* Hamburger Menu Icon for Small Screens */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Menu Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 capitalize font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 pr-4 pl-3 text-blue-500 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500'
                      : 'block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-500'
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mission"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 pr-4 pl-3 text-blue-500 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500'
                      : 'block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-500'
                  }
                >
                  Mission and Vision
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 pr-4 pl-3 text-blue-500 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500'
                      : 'block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-500'
                  }
                >
                  Books
                </NavLink>
                
              </li>
              <li>
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 pr-4 pl-3 text-blue-500 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500'
                      : 'block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-500'
                  }
                >
                  News and Updates
                </NavLink>
                
              </li>
              <li>
                <NavLink
                  to="/competitions"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 pr-4 pl-3 text-blue-500 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500'
                      : 'block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-500'
                  }
                >
                  Competitions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/questions"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 pr-4 pl-3 text-blue-500 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500'
                      : 'block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-500'
                  }
                >
                  Q&A
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
