import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function BodyPart({ data }) {
  const [inputValue, setInputValue] = useState('');
  const [inputValueMobile, setInputValueMobile] = useState('');
  console.log(inputValueMobile);
  const router = useRouter();
  const [newArraySearch, setNewArraySearch] = useState([]);
  useEffect(() => {
    if (!data) {
      return;
    }
    if (!inputValue || !inputValueMobile) {
      return;
    }
    //recipe-web-three.vercel.app
    const getMatchSearch = async () => {
      const query = {
        query: inputValue || inputValueMobile,
      };
      const getData = await fetch(
        `https://recipe-web-three.vercel.app/api/food/searchfood`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(query),
        }
      );
      const data = await getData.json();
      setNewArraySearch(data);
    };
    getMatchSearch();
  }, [data, inputValue, inputValueMobile]);
  // console.log(newArraySearch[0].data);
  return (
    <div>
      <div className="px-5 py-4">
        <div className="relative mb-10">
          <form action="">
            <label
              htmlFor=""
              className="text-green-400  font-semibold text-2xl px-5"
            >
              Search Recipe Here:
            </label>
            <input
              type="search"
              onKeyUp={(e) => setInputValueMobile(e.target.value)}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-[50%] py-2 px-2 text-lg outline-none border rounded-t "
            />
          </form>
          {newArraySearch[0]?.data?.length > 0 && inputValue != '' ? (
            <div className="absolute top-15 border sm:left-[20.9%] bg-white w-[50%] transition-all duration-200">
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
            <div className="absolute top-15 border  left-[20.9%] bg-white w-[50%] transition-all duration-200">
              No match
            </div>
          ) : (
            ''
          )}
        </div>

        <div className="p-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((i) => {
            return (
              <div
                className="py-5 text-white font-semibold border-2 border-green-200 rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
                key={i.id}
                onClick={() => router.push(`/food/${i.id}`)}
              >
                <div className="px-5">
                  <img
                    src={i.img}
                    alt=""
                    className="object-contain w-[100%] h-[200px]"
                  />
                </div>
                <div className="text-center"> {i.name}</div>
                {i.ingredients.map((item, index) => (
                  <div key={index} className="py-5 px-5">
                    <div>{item.salt}</div>
                    <div>{item.sugar}</div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BodyPart;
