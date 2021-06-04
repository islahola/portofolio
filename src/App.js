import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import KontakDiv from './components/logo/KontakDiv';
import Router from './Route/Router';
import ContactUs from './view/home/Contact';
import Home from './view/home/Home';
import Portofolio from './view/home/Portofolio./Portofolio';
import Skill from './view/home/Skill';
function App() {
  return (
    <BrowserRouter>
      <Router/>
     {/* <KontakDiv/>
     <Home/>
     <Skill/>
     <Portofolio/>
     <ContactUs/>
     <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
