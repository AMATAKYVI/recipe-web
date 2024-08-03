import React from 'react';
import ContactUs from '../../components/contactus/ContactUs';
import EmailLetter from '../../components/emailletter/EmailLetter';
import RecipeSampleDisplay from '../../components/reciplesampledisplay/RecipeSampleDisplay';
import Footer from '../../components/footer/Footer';

function index() {
  return (
    <div className="px-10">
      <ContactUs />
      <EmailLetter />
      <RecipeSampleDisplay />
      <Footer />
    </div>
  );
}

export default index;
