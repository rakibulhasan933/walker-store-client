
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';

export const UserContext = createContext();
export const ProductContext = createContext();


function App() {
  const [loginUser, setLoginUser] = useState([]);
  const [selectProduct, setSelectProduct] = useState([]);
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <ProductContext.Provider value={[selectProduct, setSelectProduct]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Checkout></Checkout>
            </PrivateRoute>
            <Route path="/deals">
              <Deals></Deals>
            </Route>
            <Route path="/login" >
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
