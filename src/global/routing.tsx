import { Box } from "@mui/material";
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import React from "react";
import { AuthPage } from "../pages/AuthPage";
import { Page404 } from "../pages/Page404";
import { ChatPage } from "../pages/ChatPage/ChatPage";

export interface IPage {
    title: string,
    path: string,
    component: React.ReactNode | JSX.Element,
}


export function ActivePage() {

    const history = useHistory()
    const location = useLocation()

    function isAuthorized() {
        return localStorage.getItem('auth')
    }

    React.useEffect(() => {
        console.log(history)
    }, [location.pathname, localStorage.getItem('token')])

    return (
        // <Box>
            <Switch>
                <Route key="Авторизация" path="/auth"><AuthPage /></Route>
                {!isAuthorized() && <Redirect to="/auth" />}
                <Route path={'/chat'}><ChatPage /></Route>
                {isAuthorized() && location.pathname == '/' && <Redirect from="" to="/chat" />}
                {isAuthorized() && <Redirect from="/auth" to="/chat" />}
                <Route path="*"><Page404/></Route>
            </Switch>
        // </Box>
    )
}