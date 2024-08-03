import React from 'react';

function ContactUs() {
  return (
    <div className="mt-10 mb-[70px]">
      {/* main title */}
      <div className="text-center mb-[60px] text-3xl font-semibold">
        Contact Us
      </div>
      <div className="flex justify-center items-center flex-col sm:flex-row">
        {/* img */}
        <div className="flex-1  items-center justify-center hidden  sm:flex">
          <img src="/contactus.png" className="h-[70%] w-[200px]" alt="" />
        </div>
        {/* form */}
        <form
          action=""
          className="flex flex-1 flex-wrap gap-3 uppercase px-10 py-5"
        >
          {/* name */}
          <label
            htmlFor="name"
            className="flex text-[12px]  text-gray-700 gap-2 flex-col"
          >
            Name
            <input
              id="name"
              type="text"
              className="border py-2 px-4 rounded-md  text-sm"
              placeholder="Enter your name..."
            />
          </label>{' '}
          {/* email */}
          <label
            htmlFor="email"
            className="flex  text-[12px] text-gray-700 gap-2 flex-col"
          >
            Email Address
            <input
              id="email"
              type="text"
              className="border py-2 px-4 rounded-md  text-sm"
              placeholder="Enter your name..."
            />
          </label>{' '}
          {/* subject */}
          <label
            htmlFor="subject"
            className="flex  text-[12px] text-gray-700 gap-2 flex-col"
          >
            Subject
            <input
              id="subject"
              type="text"
              className="border py-2 px-4 rounded-md  text-sm"
              placeholder="Enter your name..."
            />
          </label>{' '}
          {/* enquiry */}
          <label
            htmlFor="enquirytype"
            className="flex  text-[12px] text-gray-700 gap-2 flex-col"
          >
            Enquiry Type
            <input
              id="enquirytype"
              type="text"
              className="border py-2 px-4 rounded-md  text-sm"
              placeholder="Enter your name..."
            />
          </label>{' '}
          {/*   message */}
          <label
            htmlFor="enquirytype"
            className="flex  text-[12px] text-gray-700 gap-2 flex-col"
          >
            Messages
            <input
              id="enquirytype"
              type="text"
              className="border py-2 px-4 rounded-md  text-sm"
              placeholder="Enter your name..."
            />
          </label>
        </form>
      </div>
      <div className="mt-10 text-center">
        <button className="text-sm font-semibold bg-black px-[100px] py-3 rounded-md text-white">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
