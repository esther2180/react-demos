import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Articles from './articles';


const App = () => (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/cake">Articles</Link>
            </li>
        </ul>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cake" component={Articles} />
    </div>
);

export default App;
