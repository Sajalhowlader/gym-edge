import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Home from './Pages/Home/Home/Home';
// import Ourservices from './Pages/OurServices/OurServices/Ourservices';
// import Header from './Pages/Sheared/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contacts' element={<Contacts />} />

      </Routes>
    </div>
  );
}

export default App;
