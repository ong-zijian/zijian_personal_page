//import logo from './logo.svg';
import johannes from './image/johannes-plenio.jpg'
import Navbar from './components/navbar';
import './stylesheet/App.css';
import VerticalTimeline from './components/timeline.js'

function App() {
  return (
    <div className='mainDiv'>
      <Navbar/>
      <div className='container' class="mt-4">
        <img src={johannes} alt="Credit Johaness Pieno, retrieved from: https://unsplash.com/photos/DKix6Un55mw" className='johannes' ></img>
        <p><i>Credit: Image by Johaness Pieno, retrieved from <a href="https://unsplash.com/photos/DKix6Un55mw">Unsplash</a></i></p>
      </div>
      <div>
        <h2 class="text-center m-2">My Portfolio</h2>
        <VerticalTimeline/>
      </div>

    </div>
    
  );
}

export default App;
