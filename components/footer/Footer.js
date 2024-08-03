import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';

function Footer() {
  return (
    <div className="px-10 mt-10">
      {/* logo here and some links */}
      <div className="flex justify-between">
        <div className="italic font-semibold">Logo Here</div>
        <div className="flex gap-5 text-sm text-gray-600 font-semibold">
          {' '}
          <div className="">Recipes</div>
          <div className="">Blog</div>
          <div className="">Contact</div>
          <div className="">About us</div>
        </div>
      </div>
      {/* reserve by */}
      <div className=" mt-5 border-t pt-5 mb-5">
        <div className="flex justify-between">
          <span className="">© 2021 All rights reserved</span>
          <span className="flex gap-5 text-sm">
            <p>
              <Facebook className="w-5 h-5" />
            </p>
            <p className="">
              <Twitter className="w-5 h-5" />
            </p>
            <p className="">
              <Instagram className="w-5 h-5" />
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
