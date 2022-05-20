import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="navbar">
        <div className="home-icon"><i class="bi bi-house-fill"></i></div>
        <div className="wallet-icon"><i class="bi bi-wallet2"></i></div>
      </div>
      <div class="b-navbar">
        <a href="#events" className="b-navbar-link"><i class="bi bi-calendar2-week"></i></a>
        <a href="#howto" className="b-navbar-link"><i class="bi bi-magic"></i></a>
        <a href="#articles" className="b-navbar-link"><i class="bi bi-book"></i></a>
        <a href="#videos" className="b-navbar-link"><i class="bi bi-film"></i></a>
        <a href="#stats" className="b-navbar-link"><i class="bi bi-globe"></i></a>
      </div>
    </div>
  );
}

export default App;
