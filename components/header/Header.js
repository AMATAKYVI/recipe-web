import React from 'react';
import { Facebook as FacebookIcon } from 'lucide-react';
import { Twitter as TwitterIcon } from 'lucide-react';
import { Instagram as InstagramIcon } from 'lucide-react';
import Link from 'next/link';

function Header() {
  return (
    <div className="flex justify-between  py-4 px-10 border-b mb-5 items-center">
      {/* logo image */}
      <div className="text-lg font-semibold italic">
        <Link href="/">Logo Here</Link>
      </div>
      {/* middle links */}
      <div className="flex gap-10 items-center font-semibold text-sm">
        <div className="">
          <button className=" transform duration-200 py-2 rounded-md hover:text-[16px] hover:text-gray-700">
            <Link href="/"> Home</Link>
          </button>
        </div>
        <div className="">
          {' '}
          <button className=" transform duration-200  py-2 rounded-md hover:text-[16px] hover:text-gray-700">
            <Link href="/recipes">Recipes</Link>
          </button>
        </div>
        <div className="">
          {' '}
          <button className=" transform duration-200  py-2 rounded-md hover:text-[16px] hover:text-gray-700">
            <Link href="/blog">Blog</Link>
          </button>
        </div>
        <div className="">
          {' '}
          <button className=" transform duration-200  py-2 rounded-md hover:text-[16px] hover:text-gray-700">
            <Link href="/contact">Contact</Link>
          </button>
        </div>
        <div className="">
          <button className=" transform duration-200 py-2 rounded-md hover:text-[16px] hover:text-gray-700">
            <Link href="/aboutus">About us</Link>
          </button>
        </div>
      </div>
      {/* follow social account icons */}
      <div className="flex gap-10">
        <div className="">
          <FacebookIcon className="hover:text-gray-500  transform duration-100 cursor-pointer" />
        </div>
        <div className="">
          <TwitterIcon className="hover:text-gray-500  transform duration-100 cursor-pointer" />
        </div>
        <div className="">
          <InstagramIcon className="hover:text-gray-500  transform duration-100 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

const headerLink = [
  {
    goTo: '/',
    name: 'Home',
  },
];
export default Header;
