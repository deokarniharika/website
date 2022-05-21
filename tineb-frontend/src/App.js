import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './navbar/Navbar';
import BottomNavbar from './bottomNavbar/BottomNavbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {<Navbar />}
      {<BottomNavbar />}
    </div>
  );
}

export default App;