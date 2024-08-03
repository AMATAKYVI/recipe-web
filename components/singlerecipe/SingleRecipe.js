import { Clock, Drumstick, Printer, Share } from 'lucide-react';
import React from 'react';

function SingleRecipe({ item }) {
  return (
    <div className="" key={item.id}>
      {/* >> title text */}
      <div className="flex items-center justify-between">
        {/* left side title */}
        <div className="">
          <div className="text-4xl font-semibold">{item.name}</div>
          <div className="flex text-sm gap-5 mt-10">
            <div className="flex gap-2 text-[13px] items-center">
              <Clock className="w-4 h-4" />
              30mn prep time
            </div>
            <div className="flex gap-2 text-[13px] items-center">
              <Clock className="w-4 h-4" />
              40mn cook time
            </div>
            <div className="flex gap-2 text-[13px] items-center">
              <Drumstick className="w-4 h-4" /> chicken
            </div>
          </div>
        </div>
        {/* right side title */}
        <div className="flex gap-5">
          <div className="bg-teal-200 p-3 rounded-full">
            <Printer className="w-4 h-4" />
          </div>
          <div className="bg-teal-200 p-3 rounded-full">
            <Share className="w-4 h-4" />
          </div>
        </div>
      </div>
      {/* >> image and nutrition */}
      <div className="">
        <div className="">img</div>
        <div className="">nutrition</div>
      </div>
      {/* >> ingredient and other recipes */}
      <div className="">
        <div className="">ingredient</div>
        <div className="">other recipes</div>
      </div>
      {/* >> Cook direction */}
      <div className="">
        <div>Direction</div>
        <div className="">1. etc</div>
        <div className="">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dolorum corporis deserunt. Pariatur exercitationem
            nesciunt neque odio asperiores facere mollitia!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe;
