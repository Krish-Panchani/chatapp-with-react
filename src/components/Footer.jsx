import React from 'react'
import logoDark from "../assets/sendbox_logo.svg";

export default function Footer() {
    return(
        <>
        <a href="https://forms.gle/7UngoJz64XsFANT68" className="flex justify-center drop-shadow-lg">
                <div className="inline-flex justify-center items-center py-2 px-2 pr-4 my-4 text-sm rounded-full bg-blue-900 text-blue-300 hover:bg-blue-800 mx-auto">
                <span className="text-xs bg-white rounded-full text-blue-600 font-bold px-4 py-1.5 mr-3">Help?</span> <span className="text-xs font-medium sm:text-sm">✨Report a Bug/ User/ Error or Have a Suggestions 💡 for SendBox Chat-App?</span>
                <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                </div>
            </a>

<footer className="p-4 shadow md:px-6 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://www.thunderdevelops.in/sendbox/" className="flex items-center mb-4 sm:mb-0">
            <img src={logoDark} className="mr-3 h-8" alt="Logo" />
            <span className="self-center text-sm font-bold whitespace-nowrap items-center text-gray-900">Powered by Thunder Develops</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm  sm:mb-0 text-gray-500">
        <li>
                <a href="https://www.thunderdevelops.in/about-us.php" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="https://www.thunderdevelops.in/contact-us.php" className="mr-4 hover:underline md:mr-6 ">Contact</a>
            </li>
            <li>
                <a href="https://www.thunderdevelops.in/privacy-policy.php" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>

        </ul>
    </div>
    <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
    <span className="block text-sm  sm:text-center text-gray-400">© 2023 <a href="https://www.thunderdevelops.in/sendbox/" className="hover:underline text-cyan-800 font-bold">SendBox</a>. All Rights Reserved.</span>
    <span className="block text-sm sm:text-center text-gray-400">
        Design & Developed by
        <a href="https://www.instagram.com/krishpanchani/" 
    target="_blank" rel="noreferrer" title="Krish Panchani | Instagram" className="hover:underline text-gray-800 font-bold"> Krish Panchani </a> And Powerd by 
    <a href="https://www.thunderdevelops.in/" target="_blank" rel="noreferrer" title="Thunder Develops | Official Website" className="hover:underline text-gray-800 font-bold"> Thunder Develops. </a>
    </span>
</footer>
        </>
    )
    
}