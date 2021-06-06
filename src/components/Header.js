import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import { StoreContext } from "../store"
import { setPage } from "../actions"
import CartSummary from "./CartSummary";
import UserInfo from "./UserInfo";

export default function Header({title}) {
   const { dispatch } = useContext(StoreContext);
   const history = useHistory();

   const onClickHeader = () => {
      setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
    history.push("/");
   };

   return (
      <header className="header">
         <div className="header-wrap">
            <div className="header-text"  onClick={onClickHeader}>
               <Link to="/">
               <h1 className="header-title" >{title}</h1>
               </Link>
            </div>
            <div className="header-left">

               <UserInfo style={{marginRight: '25px'}} />
               <CartSummary />
            </div>
        </div>
      </header>
   );
}