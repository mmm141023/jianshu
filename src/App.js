import React, {Component} from 'react';
import Header from "./common/header";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./common/pages/home/Home";
import Detail from "./common/pages/detail/detail";
class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact render={() => <Home></Home>}></Route>
                        <Route path="/detail" exact render={() => <Detail></Detail>}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App