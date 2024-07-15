import { useState, useEffect } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import BuyNow from './BuyNow';
import StoreLocation from './StoreLocation';
import Footer from './Footer';
import FAQ from './FAQ';

function App() {
  const [page, setPage] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handlePageLoad = () => {
      setPage(window.location.pathname);
    };

    handlePageLoad();
    console.log('Add event listener');
    window.addEventListener('popstate', handlePageLoad);

    return () => {
      console.log('Remove event listener');
      window.removeEventListener('popstate', handlePageLoad);
    };
  }, []);


  return (
    <div className="app">
      <Header setPage={setPage}/>
      {page === '/' && <HomePage setPage={setPage}/>}
      {page === '/about' && <AboutUs/>}
      {page === '/purchase' && <BuyNow/>}
      {page === '/locations' && <StoreLocation/>}
      {page === '/faq' && <FAQ/>}
      <Footer setPage ={setPage}/>
    </div>
  );
}

export default App;

