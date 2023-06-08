//import logo from './logo.svg';
import zijian from './image/zijianLogo.png';
import Navbar from './components/navbar';
import './stylesheet/App.css';
import VerticalTimeline from './components/timeline.js'
import ExampleComponent from './components/typing';
//import ParticlesBackground from './components/reactParticle';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Cert from "./components/certs.js";
import Projects from "./components/project.js"

export default function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <div className='mainDiv container-fluid px-0 p-2 min-vh-100'>
      <Particles id='particles-here' init={particlesInit} options={
        {
          "fullScreen": {
              "enable": true,
              "zIndex": 1
          },
          "particles": {
              "number": {
                  "value": 10,
                  "density": {
                      "enable": false,
                      "value_area": 800
                  }
              },
              "color": {
                  "value": "#fff"
              },
              "shape": {
                  "type": "bubble",
                  "options": {
                      "sides": 0
                  }
              },
              "opacity": {
                  "value": 0.6,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 4,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "rotate": {
                  "value": 0,
                  "random": true,
                  "direction": "clockwise",
                  "animation": {
                      "enable": true,
                      "speed": 5,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 600,
                  "color": "#4672b9",
                  "opacity": 0.4,
                  "width": 2
              },
              "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": ["grab"]
                  },
                  "onclick": {
                      "enable": false,
                      "mode": "bubble"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 400,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 200
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true,
          "background": {
              "color": "#e6e6fa",
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
          }
      }
      }/>
      <Navbar/>
      {/* <div class="d-flex justify-content-center m-4 gap-2 col-6 mx-auto">
        <button class="btn btn-lg mx-4" style={{backgroundColor:"#4672b9", color:"#ffffff"}}>Projects</button>
        <button class="btn btn-lg mx-4" style={{backgroundColor:"#4672b9", color:"#ffffff"}}>Portfolio</button>
      </div> */}
      <div class="mt-2 d-flex justify-content-center" id='move'>
        <img src={zijian} alt="Zi Jian Logo" class= "img-responsive m-4 col-3 w-3"></img>
      </div>
      <div class="m-12 pb-12">
        <ExampleComponent/>
      </div>
      <div>
        <Cert/>
      </div>
      <div>
        <Projects/>
      </div>
      <div class="mt-6">
        <h2 class="text-center m-2" style={{color:'#1c2e4a'}}>My Portfolio</h2>
        <VerticalTimeline/>
      </div>
    </div>
    
  );
}
