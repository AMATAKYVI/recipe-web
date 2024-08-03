import React from 'react';
import RecipeCard from '../../components/reciplesampledisplay/RecipeCard';
import EmailLetter from '../../components/emailletter/EmailLetter';
import Footer from '../../components/footer/Footer';
function SingleCategory({ data, params }) {
  console.log(data.data[0]);
  return (
    <div className="px-10">
      <div className="font-semibold text-4xl mb-10 text-center">
        {data.data[0].category.slice(0, 1).toUpperCase() +
          data.data[0].category.slice(1, data.data[0].category.length)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data.data.map((item) => {
          return <RecipeCard food={item} key={item.id} />;
        })}
      </div>

      <EmailLetter />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  // change when in production
  const getData = await fetch(
    `https://recipe-web-three.vercel.app/api/food/category/${params.category}`
  );
  console.log(getData);
  const data = await getData.json();
  return {
    props: {
      data: data,
      params: params,
    },
  };
}

export default SingleCategory;
