'use client';
import React from 'react';
import { useRouter } from 'next/router';
function CategoryCard({ objCategory }) {
  const router = useRouter();
  return (
    <div
      className="flex justify-center items-center gap-10  flex-col h-[200px] border-2 rounded-md cursor-pointer hover:bg-gray-100 transform duration-100 hover:text-lg"
      onClick={() => router.push(`/category/${objCategory.category}`)}
    >
      <div className="">
        <img src={`${objCategory.image}`} alt="" />
      </div>
      <div className="font-semibold">{objCategory.category}</div>
    </div>
  );
}

export default CategoryCard;
