import { Outlet } from "react-router-dom";
import Navbar from "../components/homePage/NavBar";
import Cart from "../components/cart/Cart";

import { useSelector } from "react-redux";

const Root = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const closeCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <Navbar />
      {showCart && closeCart && <Cart />}
      <Outlet />
    </>
  );
};

export default Root;
