import React, { useState } from "react";
import { cn } from "../utils/cn";
import { Menu } from "./ui/navbar-menu";
import { Link } from "react-router-dom";

export function Navbar() {
  return <Navbar1 className="top-2" />;
}

function Navbar1({ className }) {
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        `fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 `,
        className
      )}
    >
      <Menu setActive={setActive} className="bg-white">
        <a href="https://vitbhopal.ac.in" target="_blank">
          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/679e48ae0017ce0d8b62/files/679f84db000b7947397b/view?project=6756a8dc000c0d24754b&mode=admin"
            alt="Logo"
            className="h-10 w-full"
          />
        </a>
        <div className="hidden lg:flex space-x-6 my-auto lg:justify-center lg:items-center ">
          <Link
            to="/#contact"
            className="text-white hover:text-purple-400 transition ease-in-out duration-300 "
          >
            Contact Us
          </Link>
          <Link to="/events">
            <button className="text-white bg-purple-600  py-1 px-4 rounded-lg hover:scale-105 ease-in-out duration-300">
              Events
            </button>
          </Link>
        </div>
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only text-white">Open main menu</span>
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </Menu>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black shadow-lg">
          <div className="flex flex-col space-y-4 px-8 py-6 justify-center items-center">
            <Link to="/#contact" className="text-white">
              Contact Us
            </Link>
            <Link to="/events">
              <button className="text-white bg-purple-600 py-1 px-4 rounded-lg hover:scale-105 ease-in-out duration-300">
                Events
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}