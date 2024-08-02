import '../styles/globals.css';
import Header from '../components/header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
