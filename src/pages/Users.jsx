import React from "react";
import Avatar1 from "../assets/av1.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <>
      <section className="bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="px-4 mx-auto max-w-screen-xl min-h-screen z-10 relative">

          <Navbar />

          <div className="w-full max-w-md p-4 shadow-md sm:p-8 my-4 items-center justify-center mx-auto drop-shadow-2xl">
            <div className="flex items-center justify-between mb-4 ">
              <h5 className="text-xl font-bold leading-none text-white">
                Your Chats
              </h5>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-400 ">
                {/* if no chat found */}
                {/* <span className="text-gray-400">
                  No Any chat found! Search & Make some Friends to Chat with
                  them.
                </span> */}

                <li className="py-3 sm:py-4 ">
                  <Link to="/chat">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={Avatar1}
                          alt="Avatar"
                        />
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium  truncate text-white">
                          John
                        </p>
                        <p className="text-sm truncate text-gray-400">You: Hello</p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-white">
                        <span className="text-xs text-gray-400">John#1234 </span>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b to-transparent from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>

      <Footer />
    </>
  );
}
