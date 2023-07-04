import React from 'react'

export default function WelcomeFeatures() {
    return(
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="max-w-xl pr-16 mx-auto mb-10">
                <h5 className="mb-6 text-3xl font-extrabold leading-none text-gray-100">
                  More about our Web Features
                </h5>
                <p className="mb-6 text-gray-400">
                  Get addition features while using this website.
                </p>
              </div>
              <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                <div className="max-w-md">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-12 h-12 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 text-cyan-500">
                    Real Time Conversation
                  </h6>
                  <p className="text-sm text-gray-300">
                    Live chatting experience with any interruptions. Your Friend
                    will get your messages more faster as much as possible.
                  </p>
                </div>
                <div className="max-w-md">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-12 h-12 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 text-cyan-500">
                    Easy to use
                  </h6>
                  <p className="text-sm text-gray-300">
                    No need to download any extra App to use. Just login and
                    continue use this web-app.
                  </p>
                </div>
                <div className="max-w-md">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-12 h-12 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 text-cyan-500">
                    Vanice Mode
                  </h6>
                  <p className="text-sm text-gray-300">
                    Vanice mode Clean yours and your friend's chat on clicking
                    Back button. By defualt vanice mode activeted, you can off
                    or on this feature anytime.
                  </p>
                </div>
                <div className="max-w-md">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-12 h-12 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 text-cyan-500">
                    Better UI Experience
                  </h6>
                  <p className="text-sm text-gray-300">
                    Designed the most beautiful, creative & detailed UI Design
                    for better chatting experience. Our UI fit on all types of
                    devices & screens.
                  </p>
                </div>
              </div>
            </div>
          </div>
    )

}