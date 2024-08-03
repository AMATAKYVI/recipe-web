import React from 'react';
import { Clock, Drumstick, Heart as HeartIcon } from 'lucide-react';

function RecipeCard({ food }) {
  return (
    <div className="max-h-[300px] border rounded-lg cursor-pointer hover:bg-gray-100 transform duration-200 shadow-lg z-1">
      <div className="relative w-content h-[60%] ">
        <span className="absolute top-5 right-5 bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300 transform duration-200 z-10">
          <HeartIcon className="w-5 h-5 rounded-full" />
        </span>
        <img
          src={`${food.img}`}
          className="h-full w-[100%] object-cover rounded-t-lg"
          alt=""
        />
      </div>

      <div className="mt-2 px-5">
        <div className="text-xl mb-2">{food.name}</div>
        <div className="text-sm flex gap-5">
          <p className="rounded-full  bg-gray-200 px-2 py-2 flex gap-2 items-center">
            <Clock className="w-4 h-4" />
            <span className="text-[13px]">30 minutes</span>
          </p>
          <p className=" bg-gray-200 px-2 py-2 flex gap-2 rounded-full">
            <Drumstick className="w-4 h-4" />
            <span className="text-[13px]">Chicken</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
