import React from 'react';

function Banner() {
  return (
    <div className="px-10 py-10">
      <div className=" rounded-lg sm:flex   ">
        {/* left side text */}
        <div className="flex flex-col items-start justify-evenly bg-blue-200 rounded-l-lg px-5">
          {/* left icon top */}
          {/* left center title and description */}
          <div className="">
            <div className="mb-5">
              <button className="bg-gray-100 px-3 py-2 rounded-full">
                {' '}
                Icon Button
              </button>
            </div>
            {/* title name text */}
            <div className="text-5xl">Spicy Wings BBQ</div>
            {/* description text */}
            <div className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              dolore.
            </div>
            {/* two button highlight the two ingredients */}
            <div className="flex gap-5 items-center mt-5 text-[13px] font-light">
              <button className="bg-gray-100 min-w-[100px] px-3 py-2 rounded-full w-content">
                <span className="">icon </span>
                under 30 minutes
              </button>
              <button className="bg-gray-100  min-w-[100px] px-3 py-2 rounded-full w-content">
                <span className="">icon </span>
                Chicken
              </button>
            </div>
          </div>
          {/* main button for visit the recipe page */}
          <div className="bg-gray-100 mt-5 rounded-full py-2 px-3">
            <div className="">Visit Recipe</div>
          </div>
        </div>
        {/* right side text */}
        <div className="hidden sm:block">
          <img src="/bannerimg.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
