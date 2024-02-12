import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Accessories from "./components/accessories";
import Account_dashboard from "./components/account_dashboard";
import Account_edit_address from "./components/account_edit_address";
import Account_edit from "./components/account_edit";
import Account_orders from "./components/account_orders";
import Account_wishlist from "./components/account_wishlist";
import Bikinis from "./components/bikinis";
import Buy_accessories from "./components/buy_accessories";
import Coming_soon from "./components/coming_soon";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Figure from "./components/figure";
import How_it_works from "./components/how_it_works";
import Index from "./components/index";
import Login_register from "./components/login_register";
import Privacy from "./components/privacy";
import Product1_simple from "./components/product1_simple";
import Product6_outofstock from "./components/product6_outofstock";
import Register_seller from "./components/register_seller";
import Reset_password from "./components/reset_password";
import Sell_item from "./components/sell_item";
import Sell from "./components/sell";
import Shop_cart from "./components/shop_cart";
import Shop_checkout from "./components/shop_checkout";
import Shop_order_complete from "./components/shop_order_complete";
import Shop_order_tracking from "./components/shop_order_tracking";
import Shop2 from "./components/shop2";
import Swimsuit from "./components/swimsuit";
import Terms from "./components/terms";
import Themewear from "./components/themewear";
import WBFF from "./components/WBFF";
import CheckHome from "./components/checkHome";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
        <Route exact path='/' element={<CheckHome />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/accessories" element={<Accessories />} />
          <Route exact path="/account-dashboard" element={<Account_dashboard />} />
          <Route exact path="/account-edit-address" element={<Account_edit_address />} />
          <Route exact path="/account-edit" element={<Account_edit />} />
          <Route exact path="/account-orders" element={<Account_orders />} />
          <Route exact path="/account-wishlist" element={<Account_wishlist />} />
          <Route exact path="/bikinis" element={<Bikinis />} />
          <Route exact path="/buy-accessories" element={<Buy_accessories />} />
          <Route exact path="/coming-soon" element={<Coming_soon />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/figure" element={<Figure />} />
          <Route exact path="/how-it-works" element={<How_it_works />} />
          <Route exact path="/login-register" element={<Login_register />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/product1-simple" element={<Product1_simple />} />
          <Route exact path="/product6-outofstock" element={<Product6_outofstock />} />
          <Route exact path="/register-seller" element={<Register_seller />} />
          <Route exact path="/reset-password" element={<Reset_password />} />
          <Route exact path="/sell-item" element={<Sell_item />} />
          <Route exact path="/sell" element={<Sell />} />
          <Route exact path="/shop-cart" element={<Shop_cart />} />
          <Route exact path="/shop-checkout" element={<Shop_checkout />} />
          <Route exact path="/shop-order-complete" element={<Shop_order_complete />} />
          <Route exact path="/shop-order-tracking" element={<Shop_order_tracking />} />
          <Route exact path="/shop2" element={<Shop2 />} />
          <Route exact path="/swimsuit" element={<Swimsuit />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/themewear" element={<Themewear />} />
          <Route exact path="/wbff" element={<WBFF />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
