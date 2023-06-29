
import './App.css';
import Navbar from './components/Navbar';
import Library from './components/Library';
import Home from './components/Musik';
import Carousel from './components/Carousel';
function App() {
 
 if ("green"){
    document.body.style.backgroundColor="gold"
    }
  return (  
<>
<Navbar/>
<Carousel/>
<Home/>
<Library/>


</>

  );

}

export default App;
