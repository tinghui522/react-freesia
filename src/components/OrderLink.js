import { useEffect, useContext } from "react";
import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { StoreContext } from "../store"

export default function OrderLink(props) {

   const { state: { userSignin : { userInfo, remember } } } = useContext(StoreContext);
   const history = useHistory();
   console.log(userInfo)
   const goToProfile = () => {
      history.push("/login?redirect=profile");
   };

   useEffect(() => {
      if(remember)
         localStorage.setItem("userInfo", JSON.stringify(userInfo));
      else
       localStorage.removeItem("userInfo");
   }, [userInfo, remember]);

   return (
      
      <>
         <nav onClick={goToProfile} style={{ ...props.style }} className="header-cart-summary" >
            {userInfo
               ? <UserOutlined style={{ fontSize: '28px', color: '#000' }} />
               : <UserSwitchOutlined style={{ fontSize: '28px', color: '#000' }} />

            }
            <p className="cart-summary-text">
               {userInfo
                  ? `${userInfo.displayName}'s`
               
                  : `請登入`
               }
            </p>
         </nav>
      </>
   );
}