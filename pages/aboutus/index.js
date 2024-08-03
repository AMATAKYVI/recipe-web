import React from 'react';
import ContactUs from '../../components/contactus/ContactUs';
import Footer from '../../components/footer/Footer';

function index() {
  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="mt-5 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel urna
        at libero bibendum tincidunt. Sed nec felis in dui tincidunt fringilla.
        Integer nec urna nec justo ultricies ultricies. Nulla facilisi. Donec
        auctor, ligula nec ultricies tincidunt, nunc libero facilisis purus, nec
        tincidunt purus nunc nec magna{' '}
      </p>

      <h2 className="text-xl font-bold mt-10">Our Mission</h2>
      <p className="mt-5 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel urna
        at libero bibendum tincidunt. Sed nec felis in dui tincidunt fringilla.
        Integer nec urna nec justo ultricies ultricies. Nulla facilisi. Donec
        auctor, ligula nec ultricies tincidunt, nunc libero facilisis purus, nec
        tincidunt purus nunc nec magna
      </p>

      <h2 className="text-xl font-bold mt-10">Our Vision</h2>
      <p className="mt-5 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel urna
        at libero bibendum tincidunt. Sed nec felis in dui tincidunt fringilla.
        Integer nec urna nec justo ultricies ultricies. Nulla facilisi. Donec
        auctor, ligula nec ultricies tincidunt, nunc libero facilisis purus, nec
        tincidunt purus nunc nec magna
      </p>

      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default index;
