import React from "react";
import Avatar1 from "../assets/av1.jpg";
import UserChat from "../components/UserChats";
import { Link } from "react-router-dom";

export default function Chat() {
  return (
    <>
      <section className="bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="px-4 mx-auto max-w-screen-xl min-h-screen z-10 relative">
          <section className="chat-area flex justify-center">
            <div className="flex-1 justify-center flex flex-col max-w-md min-h-sm max-h-screen">
              <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 bg-blue-900">
                <div className="relative flex items-center space-x-4 ">
                  <Link to="/users" className="text-white font-extrabold">
                    {"<--"}
                  </Link>
                  <div className="relative">
                    <img
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full"
                      src={Avatar1}
                      alt="Avatar"
                    />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <div className="text-2xl mt-1 flex items-center">
                      <span className="text-lg font-bold text-gray-100 mr-3">
                        John
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">Active Now</span>
                  </div>
                </div>
              </div>

              <div
                id="chat-box"
                className="chat-box flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
              >
                <UserChat />
              </div>

              <form action="#" id="typing-area" className="mx-2 my-2">
                <div className="flex">
                  <input
                    type="text"
                    className="incoming_id"
                    name="incoming_id"
                    hidden
                  />

                  <textarea
                    name="message"
                    id="message"
                    rows="1"
                    className="resize-none w-full focus:outline-none focus:placeholder-gray-400 text-gray-100 placeholder-gray-600 bg-transparent rounded-l-md px-2 py-3 mr-1"
                    placeholder="Type a message here..."
                    autoComplete="off"
                  ></textarea>

                  <button className="inline-flex items-center justify-center rounded-r-md px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
        <div className="bg-gradient-to-b to-transparent from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
    </>
  );
}
