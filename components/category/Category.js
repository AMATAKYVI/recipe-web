import React from 'react';
import CategoryCard from './CategoryCard';

function Category() {
  return (
    <div className="px-10">
      {/* category section top */}
      <div className="flex justify-between">
        {/* category title  */}
        <div className="text-3xl font-semibold">Categories</div>
        {/* view all possible category */}
        <div className="">
          <button className="bg-sky-100 px-4 py-2 rounded-lg font-semibold hover:bg-sky-200">
            view all categories
          </button>
        </div>
      </div>
      {/* category section slide bottom */}
      <div className="grid mt-10  grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {/* {categoriesArray.map((item, i) => {
          return <CategoryCard category={item} key={item[i]} />;
        })} */}
        {objCategoriesData.map((item, i) => {
          return (
            <CategoryCard className="" key={item[i]} objCategory={item}>
              {item.category}
            </CategoryCard>
          );
        })}
        {/* more? */}
      </div>
    </div>
  );
}

const objCategoriesData = [
  {
    category: 'Breakfast',
    image: '/sushi.png',
    description: 'Breakfast is the first meal of the day.',
  },
  {
    category: 'Vegan',
    image: '/cabbage.png',
    description: 'Vegan food is food made from plant-based ingredients.',
  },
  {
    category: 'Meat',
    image: '/meat.png',
    description: 'Meat is animal flesh that is eaten as food.',
  },
  {
    category: 'Desert',
    image: '/cake.png',
    description:
      'Desert is a barren area of landscape where little precipitation occurs.',
  },
  {
    category: 'Lunch',
    image: '/sandwich.png',
    description: 'Lunch is a meal eaten around midday.',
  },
];

export default Category;
