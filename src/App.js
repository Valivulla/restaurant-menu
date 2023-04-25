import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Nbar from './components/header';
import Order from './components/orders';
import Order1 from './components/orders1';
import Order2 from './components/orders2';
import Order3 from './components/orders3';
import Order4 from './components/orders4';
import Order5 from './components/orders5';


function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = <Home />
      break
   
    case "/about":
      Component  = <About /> 
      break 
      
    case "/details":
      Component = <Order />  
    case "/details1":
      Component = <Order1 />  
      case "/details2":
        Component = <Order2 />  
      case "/details3":
        Component = <Order3 />  
        case "/details4":
          Component = <Order4 />  
        case "/details5":
          Component = <Order5 />      
  }

  return (
    <>


     <Nbar />

    
     {Component}
    </>
  );
}

export default App;
