import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Perfume from './pages/Perfume'
import Fixweb from './pages/Fixweb'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'

import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart}/>
          <Route path="/perfume" component={Perfume}/>
          <Route path="/Fixweb" component={Fixweb}/>
          <Route path="/product/:productId" component={Product} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/order/:orderId" component={Order} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
