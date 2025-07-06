import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Recepie from "./pages/recepie/Recepie";
import Menu from "./pages/menu/Menu";
import Cart from "./carts/Cart";
import PlaceOrder from "./placeorder/PlaceOrder";
const App = () => {

    return (
      <>
   
  <div className="app">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="services" element={<Services />} />
          <Route path='cart' element={<Cart/>} />
          <Route path="recepie" element={<Recepie/>} />
            <Route path="menu" element={<Menu/>} />
             <Route path="placeorder" element={<PlaceOrder/>} />
        </Route>
      </Routes>
  
    </div>
    </>
  );
};

export default App;
