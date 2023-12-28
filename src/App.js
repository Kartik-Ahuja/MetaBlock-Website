// import './App.css';
import About from './Component/About';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar/Navbar';
import Main from './Main';

function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
       <Main/>
       <About />
        <Footer />
    </div>
  );
}

export default App;
