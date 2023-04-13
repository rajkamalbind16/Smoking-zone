import Products from "./Components/Cart/Products";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Prod from "./Components/Product/Prod";
import Smoke from './Components/smoke/Smoke';
import PageNotFound from './Components/Page not Found/PageNotFound';

import { BrowserRouter,Route,Routes } from "react-router-dom";
import Footer from "./Components/footer/Footer";

function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Home/>
          <Smoke/>
          <Prod/>

  <Routes>
          
          <Route path="/products" element={<Products/>}/>
          {/* <Route path="*" element={<PageNotFound/>}/> */}
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
