// import NavbarContainer from './containers/NavbarContainer';
import HomeContainer from './containers/HomeContainer';
import CartContainer from './containers/CartContainer';
import WishlistContainer from './containers/WishlistContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";

function App() {
  return (
    // <>
    //   <NavbarContainer />
    //   <HomeContainer />
    // </>
    <BrowserRouter>
      <BubblyContainer />
      <Routes>
        <Route exact path='/' element={<HomeContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path='/wishlist' element={<WishlistContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
