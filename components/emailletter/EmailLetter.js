import React from 'react';

function EmailLetter() {
  return (
    <div>
      {/* title and description */}
      <div className="">
        <div className="">Deliciousness to your inbox</div>
        <div className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
          amet!
        </div>
      </div>
      {/* input and button*/}
      <div className="">
        <div className="">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default EmailLetter;
