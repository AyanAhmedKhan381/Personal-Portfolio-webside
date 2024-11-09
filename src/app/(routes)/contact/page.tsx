/* eslint-disable react/no-unescaped-entities */

import React from "react";

const ContactForm = () => {
  return (
    
    <div className="bg-[#140c1c] p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold mt-24 sm:mt-32 items-center justify-center text-center">
        Contact From
      </h1>
      <p className="text-bg text-lg md:text-xl lg:text-[2rem] font-bold mt-10 sm:mt-7 opacity-80">
        Let’s work together!
      </p>

      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm ">
      Have a project in mind or just want to connect?<br /> Feel free to reach out!
      </p>

      {/* input filds */}
      <form className="mt-8 block w-full overflow-hidden ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200
            border-opacity-50 outline-none w-full"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200
            border-opacity-50 outline-none w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-black mt-5 text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
             border-gray-200 border-opacity-50 outline-none w-full"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-black mt-5 text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
             border-gray-200 border-opacity-50 outline-none w-full"
          />
        </div>

        <div>
          <select
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5
           rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="" disabled selected>
              Select an option
            </option>

            <option value="Frontend">Frontend Development </option>
            <option value="backend">Backend Bevelopment </option>
            <option value="fullstack">Full Stack Development </option>
          </select>
        </div>

        <textarea
          rows={7}
          placeholder="Message"
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5
           rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none">
       </textarea>

       <div className="mt-4 ">
        <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all rounded-full duration-200">
        Send Message
        </button>
       </div>

      </form>
    </div>
  );
};

export default ContactForm;
