import { AppBar, Toolbar, Button } from "@material-ui/core";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import {  } from "react-router";

import { Home } from './routes/Home';
import { Chats } from './routes/Chats';
import { Profile } from './routes/Profile';

export const HomeworkRoute = () => {
    return(
        <div>
            <BrowserRouter>
                <AppBar position="static">
                    <Toolbar>
                        <Button to="/" component={Link} color="inherit" >
                            Home
                        </Button>
                        <Button to="/profile" component={Link} color="inherit" >
                            Profile
                        </Button>
                        <Button to="/chats" component={Link} color="inherit" >
                            Chats
                        </Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route component={Chats} path="/chats" />
                    <Route component={Profile} path="/profile" />
                    <Route component={Home} path="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
