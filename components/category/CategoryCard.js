import React from 'react';

function CategoryCard({ objCategory }) {
  return (
    <div className="flex justify-center items-center gap-10  flex-col h-[200px] border-2 rounded-md">
      <div className="">
        <img src={`${objCategory.image}`} alt="" />
      </div>
      <div className="">{objCategory.category}</div>
    </div>
  );
}

export default CategoryCard;
