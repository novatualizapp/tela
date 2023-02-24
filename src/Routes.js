import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import App from "./App.js";
import Home from "./home.js";
import Fim from "./fim.js";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component={Home}  path="/" exact />
           <Route component={App}  path="/app" />
           <Route component={Fim}  path="/fim" />
       </BrowserRouter>
   )
}

export default Routes;