import Head from 'next/head';
import BodyPart from '../components/BodyPart';
import FooterPart from '../components/FooterPart';
import HeaderBar from '../components/HeaderBar';

export default function Home({ data }) {
  return (
    <div className="max-w-[1280px] mx-auto bg-[#243A73]">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBar />
      <BodyPart data={data} />

      <FooterPart />
    </div>
  );
}
//recipe-web-three.vercel.app
export async function getServerSideProps(context) {
  const getData = await fetch(
    `https://recipe-web-three.vercel.app/api/food/allfood`
  );
  const data = await getData.json();
  return {
    props: {
      data: data,
    },
  };
}
