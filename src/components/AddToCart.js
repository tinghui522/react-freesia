import { useEffect,useContext } from "react";
import { Button, notification } from "antd"
import { StoreContext } from "../store"
import { addCartItem } from "../actions";

export default function AddToCart() {
  const { state: { cartItems, productDetail: { product, qty, Size } }, dispatch } = useContext(StoreContext);

  const openNotification = () => {
    notification.open({
      message: 'Shopping Notification',
      description:
        `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    addCartItem(dispatch, product, qty ,Size);
  };

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])


  return (
    <Button type="primary" className="btn-tocar" onClick={addToCart}>
      <span style={{ marginLeft: 12 }}>ADD TO BAG</span>
    </Button>
  );
}