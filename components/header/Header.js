import React from 'react';
import { Facebook as FacebookIcon } from 'lucide-react';
import { Twitter as TwitterIcon } from 'lucide-react';
import { Instagram as InstagramIcon } from 'lucide-react';

function Header() {
  return (
    <div className="flex justify-between py-5 px-2 border-b-2 items-center">
      {/* logo image */}
      <div className="text-lg">LogoImage</div>
      {/* middle links */}
      <div className="flex gap-10 font-semibold text-sm">
        <div className="">Home</div>
        <div className="">Recipes</div>
        <div className="">Blog</div>
        <div className="">Contact</div>
        <div className="">About us</div>
      </div>
      {/* follow social account icons */}
      <div className="flex gap-10">
        <div className="">
          <FacebookIcon />
        </div>
        <div className="">
          <TwitterIcon />
        </div>
        <div className="">
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
