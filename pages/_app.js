import '../styles/globals.css';
import Header from '../components/header/Header';
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
}

export default MyApp;
