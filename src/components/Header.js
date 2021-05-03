import { useContext } from "react";
import { Link } from "react-router-dom"
import { StoreContext } from "../store"
import { pageContentsSet, activeNavItemSet } from "../actions";
import CartSummary from "./CartSummary";
import { getJSON } from "../api";

export default function Header({title}) {
   const { dispatch } = useContext(StoreContext);
   const onClickHeader = () => {
      const json = getJSON("/");
      pageContentsSet(dispatch, "/",  "Freesia");
      activeNavItemSet(dispatch, "/");
   };

   return (
      <header className="header">
         <div className="header-wrap">
            <div className="header-text"  onClick={onClickHeader}>
               <Link to="/">
               <h1 className="header-title" >{title}</h1>
               </Link>
            </div>
            <CartSummary />   
         </div>   
      </header>
   );
}