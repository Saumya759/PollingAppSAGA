import React from "react";
import {Route,Redirect,} from "react-router-dom";


const PrivateRoute = ({ component: Component, handleChildFunc, ...rest }) => {
    const user = "token from cookie";
    return <Route {...rest} render={(props) => (
        user !== null
            ? <Component {...props} user={user} handleChildFunc={handleChildFunc}/>
            : <Redirect to='/' />
        )} 
    />
}

export default PrivateRoute;