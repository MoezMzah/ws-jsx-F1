
import './App.css';
import MyFirstComponent from './components/MyFirstComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import  Navbar from './components/Navbar.js'
import Slides from './components/Slides.js'
import MySecondComponent from './components/MySecondComponent'


function App() {
  return (
    <>
   <header>
     <Navbar />
     </header>
      <MyFirstComponent />
      <MySecondComponent />
      <Slides/>

      </>
    
    
  );
}

export default App;
