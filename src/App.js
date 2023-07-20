import { useState } from "react";
import { Route } from "react-router-dom";
import{Switch} from "react-router-dom"

import Home from "./pages/Home";
import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { CartContext } from "./Contexts/CartContext";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";



function App(){
    const [cart, setCart] = useState([{}]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const [isCrease, setIsCrease] = useState(totalQuantity);
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState();
    const [isDarkMode, setIsDarkMode] = useState(false);



    return (
        <CartContext.Provider value={{user, isDarkMode, setIsDarkMode, setUser,cart, setCart, totalQuantity, setTotalQuantity, total, setTotal, isCrease, setIsCrease, number, setNumber}}>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/catalog/:slug' component={Product}/>
                <Route path='/catalog' component={Catalog}/>
                <Route path='/cart' component={ Cart }/>
                <Route path='/login' component={Login}/>
                <Route path='/accessories' component={Categories}/>
                <Route path='/contact' component={Contact}/>
   
            </Switch>
        </CartContext.Provider>
    )
  }
  export default App