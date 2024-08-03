'use client';
import { Search } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { dummyFoodData } from '../../dummyData';
import { useRouter } from 'next/router';

function SearchRecipe() {
  const [inputValue, setInputValue] = useState('');
  const [dummyData, setDummyDate] = useState(dummyFoodData);
  const [newArraySearch, setNewArraySearch] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!dummyData) {
      return;
    }
    if (!inputValue) {
      return;
    }
    //recipe-web-three.vercel.app
    const getMatchSearch = async () => {
      const query = {
        query: inputValue.toLowerCase(),
      };
      const getData = await fetch(`api/food/searchfood`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });
      const data = await getData.json();
      setNewArraySearch(data);
    };
    getMatchSearch();
  }, [dummyData, inputValue]);
  return (
    <div className="mb-10 text-center flex items-center justify-center gap-3 relative">
      <input
        onKeyUp={(e) => {
          e.preventDefault();
          setInputValue(e.target.value);
        }}
        // onChange={(e) => handleSearch(e)}
        type="text"
        name="search"
        id="search"
        className="bg-gray-100 px-5 py-2 rounded-lg border outline-none"
        placeholder="Search for recipes..."
        automComplete="off"
        autoSuggestions="off"
        onFocus={(e) => e.target.setAttribute('autocomplete', '')}
      />
      <div className="bg-gray-100 px-2 py-2 rounded-lg">
        {' '}
        <Search className="w-5 h-5 text-gray-700" />
      </div>
      {/* reuse old code */}
      <div className="absolute w-[60vw]  bottom-[-10px] rounded-lg">
        {' '}
        {newArraySearch[0]?.data?.length > 0 && inputValue != '' ? (
          <div className="absolute top-15 border sm:left-[20.9%] bg-white w-[50%] transition-all duration-200 rounded-lg">
            {newArraySearch[0]?.data?.map((item) => {
              return (
                <div
                  onClick={() => router.push(`/food/${item.id}`)}
                  key={item.name}
                  className="p-3 bg-gray-200 cursor-pointer hover:bg-gray-400 hover:border-gray-400 transition-all duration-200"
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        ) : newArraySearch[0]?.data?.length == 0 && inputValue != '' ? (
          <div className="absolute top-15 border  sm:left-[20.9%] bg-white w-[50%] transition-all duration-200">
            No match
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default SearchRecipe;
