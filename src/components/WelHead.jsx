import React from 'react'
import GoogleIcon from "../assets/GoogleIcon.svg";

export default function WelHead() {
    return(
        <div className="overflow-hidden py-5">
            <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                    Alpha
                  </p>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none">
                    Welcome to
                    <br className="hidden md:block" />
                    best Chat platform
                    <span className="inline-block text-cyan-500">Send Box</span>
                  </h2>
                  <p className="text-base text-gray-400 md:text-lg">
                    Easy to use Chat Web Application. By SendBox no need to
                    download any extra app for chat with friends.
                  </p>

                  <a
                    href="/"
                    aria-label=""
                    className="py-2 inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-700"
                  >
                    Learn more
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                    </svg>
                  </a>
                </div>
                <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
                  <div className="mb-5 font-semibold text-white">
                    Create an account
                  </div>
                  <div className="flex justify-center w-full mb-3">
                    <a href="Auth/auth.php?auth=login">
                      <img src={GoogleIcon} className="w-12 h-12" alt="" />
                    </a>
                  </div>
                  <p className="max-w-md px-5 mb-3 text-xs text-gray-300 sm:text-sm md:mb-5">
                    Not have any account? Simply register and Quickly Access
                    your Chat.
                  </p>
                  <div className="flex items-center w-full mb-5">
                    <hr className="flex-1 border-gray-300" />
                    <div className="px-3 text-xs text-gray-100 sm:text-sm">
                      or
                    </div>
                    <hr className="flex-1 border-gray-300" />
                  </div>
                  <a
                    href="Auth/auth.php?auth=login"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none"
                  >
                    Sign Up with Email
                  </a>
                </div>
              </div>
            </div>
          </div>
    )
    
}