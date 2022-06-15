import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './navbar/Navbar';
import BottomNavbar from './bottomNavbar/BottomNavbar';
import Events from './Components/Events.tsx';
import styled from '@emotion/styled';

const StyledDiv = styled('div')`
  margin:1rem;
  background-color:#e1d3b6;
`;

function App() {
  return (
    <div className="App"style={{backgroundColor:'#e1d3b6'}}>
      <header className="App-header">
      </header>
      {<Navbar />}
        <StyledDiv>
          <Events />
        </StyledDiv>
      {<BottomNavbar />}
    </div>
  );
}
export default App;