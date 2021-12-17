import React, { ReactNode } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About } from "./page/About";
import { Home } from "./page/Home";

interface Props {

}

export function Root(props: Props) {
    return <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About2</Link>
                </li>
            </ul>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </Router>
}