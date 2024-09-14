import React from "react";

const Welcome = () => {
  return (
    <div className="relative">
      <div className="absolute top-28 h-32 w-32 rounded-full bg-emerald-600 blur-[100px]"></div>

      <div
        className="container m-auto flex flex-col md:flex-row items-center justify-between py-20 md:p-12 lg:p-24"
        data-aos="zoom-in"
      >
        {/* Left Side: Welcome Title and Message */}
        <div className="flex-1 text-center sm:text-left md:pr-4 lg:pr-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Grienfield Academy
          </h1>
          <p className="text-lg text-gray-600 px-4 sm:px-0 sm:pr-16 lg:pr-32">
            At Grienfield Academy, we are committed to providing quality
            education that shapes the future. Join us in our journey to
            excellence!
          </p>
          <button className="mt-4 py-3 px-10 font-bold bg-emerald-600 rounded-full text-white">
            Apply Now
          </button>
        </div>

        {/* Right Side: Circular Image */}
        <div className="flex-none mt-6 md:mt-0">
          <img
            src="./src/assets/Cover-2.jpg"
            alt="Welcome"
            className="w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] object-cover rounded-full border-1 border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
