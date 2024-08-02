import React from 'react';
import { dummyFoodData } from '../../dummyData';
import RecipeCard from './RecipeCard';

function RecipeSampleDisplay() {
  return (
    <div className="px-10 mt-[100px]">
      {/* title text of recipe display */}
      <div className="flex justify-center items-center flex-col gap-5">
        {/* title recipe display */}
        <div className="text-3xl">Simple and tasty recipes</div>
        <div className="text-gray-700 mb-[80px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          neque. Lorem ipsum dolor sit amet.
        </div>
      </div>
      {/* grid of cards display 9 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {dummyFoodData.slice(0, 9).map((item, i) => {
          return <RecipeCard key={i} food={item} />;
        })}
      </div>
    </div>
  );
}

export default RecipeSampleDisplay;
