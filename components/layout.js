import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';
import BottomNavbar from './BottomNavbar';
import TopBar from './TopBar';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <TopBar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <BottomNavbar />
    </>
  );
}
