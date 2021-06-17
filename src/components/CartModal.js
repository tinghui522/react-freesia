import { Modal, Button, Select } from "antd";
import { useContext ,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { StoreContext } from "../store"
import { addCartItem, removeCartItem, setProductDetail } from "../actions";

const { Option } = Select;

export default function CartModal() {
   const { state: { cart: { cartItems } }, dispatch } = useContext(StoreContext);
   const history = useHistory();
   //const handleCancel = () => toggleModal(!isModalVisible);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   const checkoutHandler = () => {
      //handleCancel();
      history.push("/login?redirect=shipping");
   }

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

   return (
      //  <Modal
      //       title="Shopping Bag"
      //       visible={isModalVisible}
      //       onCancel={handleCancel}
      //  >
      <>
      <hr className="hr-line-productdetail" />
      <div className="cart-title-bg"></div>
         <p className="cart-title">Shopping Bag</p>
      
         {cartItems.length === 0 ? (
            <div className="cart-empty">Cart is empty</div>
         ) : (
            cartItems.map(item => (
               <li key={item.id} className="cart-item">
                  <Link to={`/product/${item.category}/${item.id}`}>
                     <div className="cart-image" onClick={()=>{
                        setProductDetail(dispatch, item.id, item.qty);
                        //handleCancel();
                     }}>
                        <img src={item.image} alt={item.name} />
                     </div>
                  </Link>
                  <div className="cart-item-content">
                     <div className="cart-name">{item.name}</div>
                    <div className="cart-size">{item.Size}</div>
                     <div className="cart-qty">
                        Qty: {"  "}
                        <Select
                           defaultValue={item.qty}
                           className="select-style"
                           onChange={(qty) => addCartItem(dispatch, item, qty)}
                        >
                           {[...Array(item.countInStock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </Option>
                           ))}
                        </Select>
                     </div>
                  
                     <div className="cart-price">
                        ${item.price * item.qty}    
                     </div>
                     <div className="cart-item-delete" onClick={() => removeCartItem(dispatch,item.id)}>
                        x
                     </div>
                  </div>
               </li>
            ))
         )}
         <hr className="hr-line-total" />
         <div className="cart-total-price-wrap">
           TOTAL：
            <div className="cart-total-price">${getTotalPrice()}</div>
         </div>
         <hr className="hr-line-total-btn" />
         <Button
            className="cart-modal-btn"
            type="primary"
            onClick={checkoutHandler}
         >
            <span style={{ marginLeft: 12 }}>CHECK OUT</span>
         </Button>
         <div className="block">

         </div>
         </>
      //</div>
   );
}
