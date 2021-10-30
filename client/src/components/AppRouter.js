import React, { useContext } from "react";

import {Switch, Route, Redirect} from 'react-router-dom'
import Galery from "../pages/Galery";
import { publicRoutes, authRoutes } from "../routes";
import { Context } from "../index";

const AppRouter = () => {
    const { user } = useContext(Context)
    
    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
             {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
          <Redirect to={'/login'}></Redirect>
        </Switch>
    )
}

export default AppRouter