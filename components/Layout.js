
import { useState, useEffect } from 'react';
import Meta from '../components/Meta';
import BottomNavbar from './BottomNavbar';
import Loader from './Loader';
import TopBar from './TopBar';

export default function Layout({ preview, children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      <Meta />
      <TopBar />
      {loading && <Loader />}
      <div className="min-h-screen lg:w-1/2 mx-auto">
        <main>{children}</main>
      </div>
      <BottomNavbar />
    </>
  );
}
