import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import Home from "./Home";
import Calculator from "../calculator/Calculator";
import Timer from "../timer/Timer";

class App extends Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <div className="div_nav">
                        <Link className="div_nav_link" to='/'>home</Link>
                        <Link className="div_nav_link" to='/Calculator'>计算器</Link>
                        <Link className="div_nav_link" to='/Timer'>倒计时器</Link>
                    </div>

                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/calculator' component={Calculator}></Route>
                        <Route exact path='/timer' component={Timer}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
