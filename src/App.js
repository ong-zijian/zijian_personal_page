//import logo from './logo.svg';
import johannes from './image/johannes-plenio.jpg'
import Navbar from './components/navbar';
import './stylesheet/App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <div>
        <img src={johannes} alt="Landscape with a boat" className='johannes'></img>
        </div>
        <p>Credit Johaness Pieno, retrieved from: https://unsplash.com/photos/DKix6Un55mw</p>
      </div>

    </div>
    
  );
}

export default App;
