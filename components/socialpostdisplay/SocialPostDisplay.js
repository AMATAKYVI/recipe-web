'use client';
import React, { useState, useEffect } from 'react';
import SocialCard from './SocialCard';
import { Instagram } from 'lucide-react';
import axios from 'axios';
const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
  params: {
    tags: 'vegetarian,dessert',
    number: '1',
  },
  headers: {
    'x-rapidapi-key': 'cc150d9afdmsh73b74a059750090p161fccjsn3e6bc31abf3a',
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  },
};
function SocialPostDisplay() {
  const [recipes, setRecipe] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setRecipe(response.data.recipes);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="mt-[100px] px-10">
      {/* title text */}
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="text-3xl mb-4">check out @xyz on instagram</div>
        <div className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          nulla repellendus doloribus cumque facilis suscipit atque excepturi
          maiores? Quidem, voluptatem!
        </div>
      </div>
      {/* some images running slide */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {socialData.map((item, i) => {
          return <SocialCard key={i} social={item} />;
        })}
      </div>
      {/* visit on instagram */}
      <div className="mb-10 mt-10 text-center">
        <button className="bg-black text-white font-semibold text-sm w-fit mx-auto px-10 py-3 rounded-lg flex gap-3">
          Visit on instagram <Instagram />
        </button>
      </div>
    </div>
  );
}

const socialData = [
  {
    id: 1,
    account: 'FoodieLand',
    accountImg: '/Oval.png',
    accountLocation: 'Tokyo, Japan',
    accountLike: '34,134',
    accountDescription:
      'The vegetables dishes need to have certain vitamin for those people',
    accountPostDate: 'September 19',
    accountPostImg: '/socialimg1.png',
  },
  {
    id: 2,
    account: 'FoodieLand',
    accountImg: '/Oval.png',
    accountLocation: 'Tokyo, Japan',
    accountLike: '74,134',
    accountDescription:
      'The vegetables dishes need to have certain vitamin for those people',
    accountPostDate: 'January 19',
    accountPostImg: '/socialimg2.png',
  },
  {
    id: 3,
    account: 'FoodieLand',
    accountImg: '/Oval.png',
    accountLocation: 'Tokyo, Japan',
    accountLike: '1,134',
    accountDescription:
      'The vegetables dishes need to have certain vitamin for those people',
    accountPostDate: 'March 19',
    accountPostImg: '/socialimg3.png',
  },
  {
    id: 4,
    account: 'FoodieLand',
    accountImg: '/Oval.png',
    accountLocation: 'Tokyo, Japan',
    accountLike: '7,134',
    accountDescription:
      'The vegetables dishes need to have certain vitamin for those people',
    accountPostDate: 'October 19',
    accountPostImg: '/socialimg4.png',
  },
];

export default SocialPostDisplay;
