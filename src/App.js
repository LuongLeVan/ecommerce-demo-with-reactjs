import { useState } from "react";
import { Route } from "react-router-dom";
import{Switch} from "react-router-dom"

import Home from "./pages/Home";
import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { CartConntext } from "./Contexts/CartContext";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";



function App(){
    const [cart, setCart] = useState([{}])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    const [isCrease, setIsCrease] = useState(totalQuantity)
    const [number, setNumber] = useState(0)
    const [user, setUser] = useState();

    
/*     useEffect(() => {
      const getUser = () => {
        fetch("https://localhost:5000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
        .then((response) => {
            if (response.status === 200) return response.json();
            throw new Error("authentication has been failed!");
          })
          .then((resObject) => {
            setUser(resObject.user);
          })
          .catch((err) => {
            console.log(err);
          });
        };
        getUser();
      }, []);
       */


    return (
        <CartConntext.Provider value={{user, setUser,cart, setCart, totalQuantity, setTotalQuantity, total, setTotal, isCrease, setIsCrease, number, setNumber}}>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/catalog/:slug' component={Product}/>
                <Route path='/catalog' component={Catalog}/>
                <Route path='/cart' component={ Cart }/>
                <Route path='/login' component={Login}/>
                <Route path='/accessories' component={Categories}/>
                <Route path='/contact' component={Contact}/>
   
            </Switch>
        </CartConntext.Provider>
    )
  }
  export default App