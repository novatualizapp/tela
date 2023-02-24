import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./App.js";
import Fim from "./home.js";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = {Home}  path="/" exact />
           <Route component = {Fim}  path="/fim" />
       </BrowserRouter>
   )
}

export default Routes;