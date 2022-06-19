import { useRouter } from 'next/router';
import React from 'react';

function FoodPage({ data, params }) {
  const router = useRouter();
  console.log(data);
  return (
    <div className="max-w-[1280px] mx-auto bg-[#243A73] text-white">
      {data.map((item) => {
        return (
          <div className=" border px-5" key={item.id}>
            <div
              onClick={() => router.push('/')}
              className=" mb-8 cursor-pointer py-2 bg-blue-800 w-fit px-10 mt-2  rounded-lg  text-white font-semibold text-xl shadow-md shadow-blue-200 hover:bg-blue-700 transition-all duration-200"
            >
              Go back
            </div>
            <div className=" bg-gray-300 py-5 rounded-lg">
              <img
                src={item.img}
                alt=""
                className="w-[900px] h-[500px] object-contain mx-auto"
              />
            </div>
            <div className="  mt-5 py-5 w-[500px] mx-auto px-5">
              <div className="font-semibold text-3xl text-green-400">
                Ingredients Information
              </div>
              <div className="p-10">
                <h1 className="text-xl mb-10">
                  <span className="text-blue-500"># </span>
                  {item.name}
                </h1>
                <div>
                  {item.ingredients.map((ex) => {
                    return (
                      <ul key={item.id} className="space-y-10">
                        <li className="list-disc	">{ex.salt}</li>
                        <li className="list-disc	">{ex.sugar}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;

  const getData = await fetch(
    `https://recipe-web-three.vercel.app/api/food/${params.id}`
  );
  const getNewData = await getData.json();
  const { data } = getNewData;
  return {
    props: {
      data: data,
      params: params,
    },
  };
}
export default FoodPage;
