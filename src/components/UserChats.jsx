import React from "react";
import DeleteBtn from "../assets/delete_btn.svg";
import Avatar2 from "../assets/av2.png";

export default function userChats() {
  return (
    <>
      {/* Sender Chat  */}
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-end">
            <div>
              <span className="text-base font-normal px-4 py-2 rounded-2xl inline-block rounded-br-none bg-blue-700 text-white max-w-xs min-w-xs max-h-screen break-words">
                Hello
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-xs font-xs text-gray-400">12:30 PM</span>
              <button
                className="pl-1"
                type="button"
                
              >
                <img className="w-3" src={DeleteBtn} alt="delete btn" />
              </button>
              <p id="results"></p>
            </div>
          </div>
        </div>
      </div>

      {/* Receiver Chat  */}
      <div className="chat-message">
        <div className="flex items-end">
          <img src={Avatar2} alt="My profile" className="w-6 h-6 rounded-2xl" />
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-start">
            <div>
              <span className="text-base font-normal px-4 py-2 rounded-2xl inline-block rounded-bl-none bg-gray-100 text-gray-800">
                Hey
              </span>
            </div>

            <span className="text-xs font-xs text-gray-400">1:30 PM</span>
          </div>
        </div>
      </div>

      {/* Receiver Chat  */}
      <div className="chat-message">
        <div className="flex items-end">
          <img src={Avatar2} alt="My profile" className="w-6 h-6 rounded-2xl" />
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-start">
            <div>
              <span className="text-base font-normal px-4 py-2 rounded-2xl inline-block rounded-bl-none bg-gray-100 text-gray-800">
                How are you?
              </span>
            </div>

            <span className="text-xs font-xs text-gray-400">1:30 PM</span>
          </div>
        </div>
      </div>

      {/* Sender Chat  */}
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-end">
            <div>
              <span className="text-base font-normal px-4 py-2 rounded-2xl inline-block rounded-br-none bg-blue-700 text-white max-w-xs min-w-xs max-h-screen break-words">
                I'am Fine
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-xs font-xs text-gray-400">12:30 PM</span>
              <button
                className="pl-1"
                type="button"
                
              >
                <img className="w-3" src={DeleteBtn} alt="delete btn" />
              </button>
              <p id="results"></p>
            </div>
          </div>
        </div>
      </div>
      {/* Sender Chat  */}
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-end">
            <div>
              <span className="text-base font-normal px-4 py-2 rounded-2xl inline-block rounded-br-none bg-blue-700 text-white max-w-xs min-w-xs max-h-screen break-words">
                So, How was your day?
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-xs font-xs text-gray-400">12:30 PM</span>
              <button
                className="pl-1"
                type="button"
                
              >
                <img className="w-3" src={DeleteBtn} alt="delete btn" />
              </button>
              <p id="results"></p>
            </div>
          </div>
        </div>
      </div>

            {/* Receiver Chat  */}
            <div className="chat-message">
        <div className="flex items-end">
          <img src={Avatar2} alt="My profile" className="w-6 h-6 rounded-2xl" />
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-start">
            <div>
              <span className="text-base font-normal px-4 py-2 rounded-2xl inline-block rounded-bl-none bg-gray-100 text-gray-800">
                Not so good, Because of Raining.
              </span>
            </div>

            <span className="text-xs font-xs text-gray-400">1:30 PM</span>
          </div>
        </div>
      </div>

       {/* Sender Chat  */}
       <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-end">
            <div>
              <span className="text-base font-normal px-4 py-2 rounded-2xl inline-block rounded-br-none bg-blue-700 text-white max-w-xs min-w-xs max-h-screen break-words">
                Oh, Looks like you don't like Rainy Season
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-xs font-xs text-gray-400">12:30 PM</span>
              <button
                className="pl-1"
                type="button"
                
              >
                <img className="w-3" src={DeleteBtn} alt="delete btn" />
              </button>
              <p id="results"></p>
            </div>
          </div>
        </div>
      </div>

      {/* Sender Chat  */}
       <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-end">
            <div>
              <span className="text-base font-normal px-4 py-2 rounded-2xl inline-block rounded-br-none bg-blue-700 text-white max-w-xs min-w-xs max-h-screen break-words">
                Okay Bye
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-xs font-xs text-gray-400">12:30 PM</span>
              <button
                className="pl-1"
                type="button"
                
              >
                <img className="w-3" src={DeleteBtn} alt="delete btn" />
              </button>
              <p id="results"></p>
            </div>
          </div>
        </div>
      </div>
      {/* Sender Chat  */}
       <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-end">
            <div>
              <span className="text-base font-normal px-4 py-2 rounded-2xl inline-block rounded-br-none bg-blue-700 text-white max-w-xs min-w-xs max-h-screen break-words">
                Going for office
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-xs font-xs text-gray-400">12:30 PM</span>
              <button
                className="pl-1"
                type="button"
                
              >
                <img className="w-3" src={DeleteBtn} alt="delete btn" />
              </button>
              <p id="results"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
