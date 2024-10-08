import Head from 'next/head';
import BodyPart from '../components/BodyPart';
import FooterPart from '../components/FooterPart';
import HeaderBar from '../components/HeaderBar';
import Banner from '../components/banner/Banner';
import Category from '../components/category/Category';
import SocialPostDisplay from '../components/socialpostdisplay/SocialPostDisplay';
import EmailLetter from '../components/emailletter/EmailLetter';
import Footer from '../components/footer/Footer';
import RecipeSampleDisplay from '../components/reciplesampledisplay/RecipeSampleDisplay';

export default function Home({}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Category />
      <RecipeSampleDisplay />
      <SocialPostDisplay />
      <EmailLetter />
      <Footer />
      {/* <HeaderBar />
      <BodyPart data={data} />

      <FooterPart /> */}
    </div>
  );
}
//recipe-web-three.vercel.app
// export async function getServerSideProps(context) {
//   const getData = await fetch(
//     `https://recipe-web-three.vercel.app/api/food/allfood`
//   );
//   const data = await getData.json();
//   return {
//     props: {
//       data: data,
//     },
//   };
// }
