import { div } from "framer-motion/client";
import React from "react";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  my-16">
      <img
        src="https://navakaranatechdemo.netlify.app/assests/lets-connect.png"
        alt=""
      />
      <form
        action=""
        className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 md:grid-rows-6 gap-3"
      >
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Individual / Business" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <select name="" id="">
          <option value="Services Looking For">Services Looking For</option>
          <option value="Web Designing">Web Designing</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Application">Mobile Application</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="ERP Solutions">ERP Solutions</option>
          <option value="PayRoll">PayRoll</option>
          <option value="Project Consulting">Project Consulting</option>
          <option value="Others">Others</option>
        </select>
        <textarea
          name=""
          id=""
          placeholder="Description"
          className="col-span-1 md:col-span-2 row-span-2"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md col-span-1 md:col-span-2 mx-auto w-20 px-2 py-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
