import { useState, useContext } from "react";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import { CartIcon } from "./Icons";
import CartModal from "./CartModal";
import { StoreContext } from "../store";

export default function CartSummary() {
  const { state: { cart: { cartItems } } } = useContext(StoreContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const count = (cartItems.length > 0) ?
    cartItems.reduce((sum, item) => sum + item.qty, 0)
    : 0;

  return (
    <>
      <Link to="/cart">
        <nav className="header-cart-summary" >
          <Badge count={count} size={"small"} style={{ color: 'black', backgroundColor: '#EAE3D8' }}>
            <CartIcon size={32}/>
          </Badge>
        </nav>
      </Link>
      
      {/*<CartModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      /> */}
    </>
  );
}
