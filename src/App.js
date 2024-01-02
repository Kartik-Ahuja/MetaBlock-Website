// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Footer from './Component/Footer';
import Aboutus from './Component/Insights/company/About/Aboutus';
import GenerativeAl from './Component/MainPage/GenerativeAl';
import Navbar from './Component/Navbar/Navbar';
import CardSlider from './Component/WebApplicationDevelopment/CardSlider';
import OnDemandAppSlider from './Component/WebApplicationDevelopment/OnDemandAppSlider';
import WebApplication from './Component/WebApplicationDevelopment/WebApplication';
import WebApplicationMainPage from './Component/WebApplicationDevelopment/WebApplicationMainPage';
import Main from './Main';
import Celebrations from './Component/Insights/company/Celebrations/Celebrations';
import Announcement from './Component/Insights/company/Announcement/Announcement';

function App() {
  return (
    <div className="App">
        
       <BrowserRouter>
      
      <Navbar/>
 
      <Routes>
       <Route path='/' element={ <Main/>}/>
       <Route path='/Aboutus' element={<Aboutus/>}/>
       <Route path='/Celebrations' element={<Celebrations/>}/>
       <Route path='/Announcement' element={<Announcement/>}/>
      

      </Routes>
          
       </BrowserRouter>

       <About />
        <Footer />

    </div>
  );
}

export default App;
