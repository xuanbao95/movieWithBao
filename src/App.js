
import React from "react"
import { BrowserRouter, Route, Suspence, Switch } from "react-router-dom";
import { routerHome } from "./routers"
import Home from './Tix/Home';
import HomeTemplate from './Template/HomeTemplate';
import { Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
import Loading from "./component/Loading";

// import Detail from './Tix/Detail';
function App() {

  const showMenuHome = (routers) => {
    if (routers && routers.length > 0) {
      return routers.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}

          />

        )

      })
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={Loading}>
          {showMenuHome(routerHome)}
        </Suspense>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
