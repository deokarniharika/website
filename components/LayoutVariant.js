
import { useState, useEffect } from 'react';
import Meta from './Meta';
import BottomNavbar from './BottomNavbar';
import Loader from './Loader';
import TopBar from './TopBar/variant';

export default function Layout({ preview, children, align }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      <Meta />
      <TopBar align={align} />
      {loading && <Loader />}
      <div className="min-h-screen lg:w-1/2 mx-auto">
        <main>{children}</main>
      </div>
      <BottomNavbar />
    </>
  );
}
