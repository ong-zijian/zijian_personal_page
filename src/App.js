//import logo from './logo.svg';
import zijian from './image/zijianLogo.png';
import Navbar from './components/navbar';
import './stylesheet/App.css';
import VerticalTimeline from './components/timeline.js'
import ExampleComponent from './components/typing';

function App() {
  return (
    <div className='mainDiv container-fluid px-0 p-0 min-vh-100'>
      <Navbar/>
      <div class="mt-2 d-flex justify-content-center">
        <img src={zijian} alt="Zi Jian Logo" class= "img-responsive m-4 col-3 w-3"></img>
      </div>
      <div class="m-12 pb-12">
        <ExampleComponent/>
      </div>
      <div class="mt-6">
        <h2 class="text-center m-2" style={{color:'#1c2e4a'}}>My Portfolio</h2>
        <VerticalTimeline/>
      </div>
    </div>
    
  );
}

export default App;
