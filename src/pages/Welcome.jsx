import React from "react";
import Navbar from "../components/Navbar";
import WelFeatures from "../components/WelFeatures";
import WelAlert from "../components/WelAlert";
import WelHead from "../components/WelHead";

export default function Welcome() {
  return (
    <>
      <section className="bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="px-4 mx-auto max-w-screen-xl z-10 relative">

          <Navbar />

          <WelAlert />

          <WelHead />

          <WelFeatures />
          
        </div>
        <div className="bg-gradient-to-b to-transparent from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
    </>
  );
}
