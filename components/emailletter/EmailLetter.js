import React from 'react';

function EmailLetter() {
  return (
    <div className="px-10 mt-10 mb-10 flex flex-col items-center justify-center gap-5 bg-blue-200 py-10 rounded-lg mx-10">
      {/* title and description */}
      <div className="flex flex-col items-center">
        <div className="mb-3 text-3xl">Deliciousness to your inbox</div>
        <div className="text-sm text-gray-700 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos
          illum, autem magni quidem at voluptatem minus voluptatum atque
          recusandae?
        </div>
      </div>
      {/* input and button*/}
      <div className="flex py-3">
        <div className="">
          <input
            type="text"
            className="border w-[300px] py-3 px-2 rounded-l-lg text-sm  focus:outline-gray-400 focus:outline-1"
            placeholder="Enter your email"
          />
        </div>
        <div className="text-sm">
          <button className="bg-black text-white font-semibold px-10 py-3  rounded-r-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailLetter;
