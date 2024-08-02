import React from 'react';
import SocialCard from './SocialCard';

function SocialPostDisplay() {
  return (
    <div className="mt-[100px] px-10">
      {/* title text */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl">check out @xyz on instagram</div>
        <div className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          nulla repellendus doloribus cumque facilis suscipit atque excepturi
          maiores? Quidem, voluptatem!
        </div>
      </div>
      {/* some images running slide */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {socialData.map((item, i) => {
          return <SocialCard key={i} social={item} />;
        })}
      </div>
      {/* visit on instagram */}
      <div className="">
        <div className="">Visit on instagram</div>
      </div>
    </div>
  );
}

const socialData = [
  {
    id: 1,
    account: 'FoodieLand',
    account_img: '/Oval.png',
    account_location: 'Tokyo, Japan',
    account_like: '34,134',
    account_description:
      'The vegetables dishes need to have certain vitamin for those people',
    account_post_date: 'September 19',
    account_post_img: '/socialimg1.png',
  },
  {
    id: 2,
    account: 'FoodieLand',
    account_img: '/Oval.png',
    account_location: 'Tokyo, Japan',
    account_like: '74,134',
    account_description:
      'The vegetables dishes need to have certain vitamin for those people',
    account_post_date: 'January 19',
    account_post_img: '/socialimg2.png',
  },
  {
    id: 3,
    account: 'FoodieLand',
    account_img: '/Oval.png',
    account_location: 'Tokyo, Japan',
    account_like: '1,134',
    account_description:
      'The vegetables dishes need to have certain vitamin for those people',
    account_post_date: 'March 19',
    account_post_img: '/socialimg3.png',
  },
  {
    id: 4,
    account: 'FoodieLand',
    account_img: '/Oval.png',
    account_location: 'Tokyo, Japan',
    account_like: '7,134',
    account_description:
      'The vegetables dishes need to have certain vitamin for those people',
    account_post_date: 'October 19',
    account_post_img: '/socialimg4.png',
  },
];

export default SocialPostDisplay;
