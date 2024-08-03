import { Clock, Drumstick, Printer, Share } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react';
import SingleRecipe from '../../components/singlerecipe/SingleRecipe';
import EmailLetter from '../../components/emailletter/EmailLetter';
import Footer from '../../components/footer/Footer';
import SearchRecipe from '../../components/searchrecipe/SearchRecipe';

function FoodPage({ data, params }) {
  const router = useRouter();
  console.log(data);
  return (
    <div className="px-10 mx-auto ">
      {/* <SearchRecipe /> */}
      {data.map((item) => {
        return <SingleRecipe key={item.id} item={item} />;
      })}
      <EmailLetter />
      {/* random recipe you might like? */}
      <Footer />
    </div>
  );
}
//recipe-web-three.vercel.app
export async function getServerSideProps(context) {
  const { params } = context;

  const getData = await fetch(
    `https://recipe-web-three.vercel.app/api/food/${params.id}`
  );
  const getNewData = await getData.json();
  const { data } = getNewData;
  return {
    props: {
      data: data,
      params: params,
    },
  };
}
export default FoodPage;
