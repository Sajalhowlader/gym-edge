import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/CheckOut/Checkout';

import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/NotFound/Notfound';
import RequireAuth from './Pages/OurServices/RequireAuth/RequireAuth';
import SingIn from './Pages/Submition/SingIn/SingIn';
import SingUp from './Pages/Submition/SingUp/SingUp';
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
        <Route path='checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='blog' element={<Blogs />} />
        <Route path='login' element={<SingIn />} />
        <Route path='register' element={<SingUp />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
