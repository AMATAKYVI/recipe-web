import React from 'react';
import { Heart as HeartIcon } from 'lucide-react';

function RecipeCard({ food }) {
  return (
    <div className="max-h-[300px] border rounded-lg ">
      <div className="relative w-content h-[60%]">
        <span className="absolute top-5 right-5 bg-gray-200 px-5 py-2 rounded-full">
          <HeartIcon />
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
          <p className="rounded-lg bg-gray-200 px-2 py-2">30 minutes</p>
          <p className="rounded-lg bg-gray-200 px-2 py-2">chicken</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
