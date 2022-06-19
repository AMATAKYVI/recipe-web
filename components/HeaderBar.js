import React from 'react';

function HeaderBar() {
  return (
    <div className="flex items-center p-2 py-3 ">
      <div className="flex-[0.6] text-4xl text-blue-800 font-semibold ">
        Logo
      </div>
      <div className="flex-1 flex gap-10">
        <div className="px-5  py-1">
          Creator of the Page:{' '}
          <span className="text-blue-500 font-semibold">Amatak Yvi</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
