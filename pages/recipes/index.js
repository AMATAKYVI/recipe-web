import React from 'react';
import RecipeSampleDisplay from '../../components/reciplesampledisplay/RecipeSampleDisplay';
import SearchRecipe from '../../components/searchrecipe/SearchRecipe';
import Footer from '../../components/footer/Footer';
import EmailLetter from '../../components/emailletter/EmailLetter';

function index() {
  return (
    <div className="px-10">
      <SearchRecipe />
      <RecipeSampleDisplay />
      <EmailLetter />
      <Footer />
    </div>
  );
}

export default index;
