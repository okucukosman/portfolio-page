import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="/" className="flex items-center">
            <img
              src="https://icon-library.com/images/frontend-icon/frontend-icon-29.jpg"
              className="mr-3 h-6 sm:h-9"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Orhan Küçükosman
            </span>
          </a>
          <a href="#" className="flex items-center">
            <a href="#">Dark Mode</a>
          </a>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
              <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline mx-1"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#Projects"
                  className="text-gray-900 dark:text-white hover:underline mx-1"
                >
                  Projects
                </a>
                <a
                  href="#Contact"
                  className="text-gray-900 dark:text-white hover:underline mx-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
