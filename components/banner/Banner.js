import { Clock, Drumstick, FireExtinguisher } from 'lucide-react';
import React from 'react';

function Banner() {
  return (
    <div className="px-10 py-10">
      <div className=" rounded-lg sm:flex   ">
        {/* left side text */}
        <div className="flex flex-1 flex-col  items-start justify-evenly bg-blue-200 rounded-l-lg px-5">
          {/* left icon top */}
          {/* left center title and description */}
          <div className="">
            <div className="mb-5">
              <button className="bg-gray-100 px-3 py-2  flex  gap-2 font-semibold rounded-full">
                <FireExtinguisher className="w-5 h-5" /> Special Recipe
              </button>
            </div>
            {/* title name text */}
            <div className="text-5xl">Spicy Wings BBQ</div>
            {/* description text */}
            <div className="text-gray-700 text-sm mt-6 flex-wrap flex ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro, laboriosam. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Omnis, delectus?
            </div>
            {/* two button highlight the two ingredients */}
            <div className="flex gap-5 items-center mt-5 text-[13px]">
              <p className="rounded-full  bg-gray-200 px-3 py-2 flex gap-2 items-center">
                {' '}
                <span className="">
                  <Clock className="w-4 h-4" />{' '}
                </span>
                under 30 minutes
              </p>

              <p className="rounded-full  bg-gray-200 px-3 py-2 flex gap-2 items-center">
                <span className="">
                  <Drumstick className="w-4 h-4" />{' '}
                </span>
                Chicken
              </p>
            </div>
          </div>
          {/* main button for visit the recipe page */}
          <div className="text-white  mt-1 rounded-full py-2 px-10 text-sm bg-black font-semibold">
            <div className="">Visit Recipe</div>
          </div>
        </div>
        {/* right side text */}
        <div className="hidden sm:block flex-1">
          <img src="/bannerimg.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
