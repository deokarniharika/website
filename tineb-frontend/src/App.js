import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './Components/Navbar/Navbar';
import BottomNavbar from './Components/Bottom Navbar/BottomNavbar';

function App() {
  return (
    <div className="App"style={{backgroundColor:'#e1d3b6'}}>
      <header className="App-header">
      </header>
      {<Navbar />}
      {<BottomNavbar />}
    </div>
  );
}
export default App;