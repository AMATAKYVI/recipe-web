import React from 'react';
import { Heart as HeartIcon } from 'lucide-react';
import { MessageCircle as CommentIcon } from 'lucide-react';
import { ExternalLink as ShareIcon } from 'lucide-react';
import { Bookmark as BookmarkIcon } from 'lucide-react';
import { Ellipsis as LoadingIcon } from 'lucide-react';

function SocialCard({ social }) {
  return (
    <div className="text-[14px] border px-5 py-5 rounded-md">
      {/* post account header */}
      <div className="flex gap-3 mb-3">
        <img src={`/Oval.png`} alt="" className="object-contain" />
        <div className="">
          <div className="text-[14px]">{social.account}</div>
          <div className="text-[12px] text-gray-700">
            {social.accountLocation}
          </div>
        </div>
      </div>
      {/* post account img */}
      <div className="">
        <img src={`${social.accountPostImg}`} alt="" />
      </div>
      {/* post icons like, share, save */}
      <div className="mt-2 mb-2 text-light text-gray-700">
        <div className="flex  justify-between">
          <div className="flex gap-3">
            {' '}
            <HeartIcon className="w-5 h-5" />
            <CommentIcon className="w-5 h-5" />
            <ShareIcon className="w-5 h-5" />
          </div>

          <div className="">
            <BookmarkIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
      {/* post total likes */}
      <div className="flex text-[13px] gap-1">
        <div className="">
          Liked by <span className="font-semibold">xyz</span> and
        </div>
        <div className="font-semibold">{social.accountLike}</div>
      </div>
      {/* post description */}
      <div className="flex text-[13px]">
        <div className="text-[13px]  mt-1">
          <span className="font-semibold"> {social.account}.</span>{' '}
          <span className="">{social.accountDescription}</span>
        </div>
      </div>
      {/* post date of post */}
      <div className="text-[12px] text-gray-600">May 19</div>
    </div>
  );
}

export default SocialCard;
