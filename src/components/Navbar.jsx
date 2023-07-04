import React from "react";
import Logo from "../assets/sendbox_logo_white.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex border-gray-200 px-2 sm:px-4 py-5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link className="flex items-center" to="/">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="SendBox Logo" />
          </Link>

          <Link to="logout" className="logout">
            <button
              type="button"
              className="text-red-700 font-bold text-m px-5 py-2.5 mr-3"
            >
              LogOut
            </button>
          </Link>
        </div>
      </nav>

      <div className="flex py-2">
        <div className="border-b border-gray-300 items-center justify-center mx-auto">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-300">
            <li className="mr-2">
              <Link
                to="/users"
                className="inline-flex p-4 rounded-t-lg border-b-2 active text-cyan-400 border-cyan-400 group"
                aria-current="page"
              >
                <svg
                  aria-hidden="true"
                  className="sm:mr-2 w-5 h-5 text-cyan-4 group-hover:text-cyan-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6,14.733V7.267A1.811,1.811,0,0,0,15.85,5.4H5.35A1.811,1.811,0,0,0,3.6,7.267v7.467A1.811,1.811,0,0,0,5.35,16.6H7.975L10.6,19.4l2.625-2.8H15.85a1.811,1.811,0,0,0,1.75-1.867ZM6.225,9.133A.906.906,0,0,1,7.1,8.2h7a.935.935,0,0,1,0,1.867h-7a.906.906,0,0,1-.875-.933Zm.875,2.8a.935.935,0,0,0,0,1.867H9.725a.935.935,0,0,0,0-1.867Z"
                    fill-rule="evenodd"
                  />
                </svg>
                <span className="hidden sm:block">Chats</span>
              </Link>
            </li>

            <li className="mr-2">
              <Link
                to="/friends"
                className="inline-flex p-4 text-cyan-400 rounded-t-lg border-b-2 border-cyan-400 active active hover:border-cyan-500 hover:text-blue-300 group"
                aria-current="page"
              >
                <svg
                  aria-hidden="true"
                  className="sm:mr-2 w-5 h-5 text-cyan-400 group-hover:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="hidden sm:block">Friends</span>
              </Link>
            </li>

            <li className="mr-2">
              <Link
                to="/myprofile"
                className="inline-flex p-4 text-cyan-400 rounded-t-lg border-b-2 border-cyan-400 active hover:text-cyan-400 hover:border-cyan-500  group"
                aria-current="page"
              >
                <svg
                  aria-hidden="true"
                  className="sm:mr-2 w-5 h-5 text-cyan-400 group-hover:text-cyan-500  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="hidden sm:block">Profile</span>
              </Link>
            </li>

            <li className="mr-2">
              <Link
                to="#"
                className="inline-flex p-4 text-cyan-400 rounded-t-lg border-b-2 border-cyan-400 active hover:text-cyan-400 hover:border-cyan-500  group"
                aria-current="page"
              >
                <svg
                  aria-hidden="true"
                  className="sm:mr-2 w-5 h-5 text-cyan-400 group-hover:text-cyan-500  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                </svg>
                <span className="hidden sm:block">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
