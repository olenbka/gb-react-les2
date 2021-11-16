import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

// import {  } from "react-router";

import { Home } from './routes/Home';
import { Chats } from './routes/Chats';
import { Profile } from './routes/Profile';
import { store, persistor } from "./store";

export const HomeworkRoute = () => {
    return(
        <div>
            <Provider store={store}>
                <PersistGate loading ={null} persistor={persistor}>
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
                </PersistGate>
            </Provider>
        </div>
    );
};
