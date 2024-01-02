// import './App.css';
import About from './Component/About';
import Footer from './Component/Footer';
import GenerativeAl from './Component/MainPage/GenerativeAl';
import Navbar from './Component/Navbar/Navbar';
import CardSlider from './Component/WebApplicationDevelopment/CardSlider';
import OnDemandAppSlider from './Component/WebApplicationDevelopment/OnDemandAppSlider';
import WebApplication from './Component/WebApplicationDevelopment/WebApplication';
import WebApplicationMainPage from './Component/WebApplicationDevelopment/WebApplicationMainPage';
import Main from './Main';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Main/> */}
      <WebApplicationMainPage/>
      <About />
      <Footer />
      {/* <CardSlider/> */}
      {/* <OnDemandAppSlider/> */}
    </div>
  );
}

export default App;
