import React from 'react';
import { Link, Route } from 'react-router-dom';
import Article1 from './article_1';
import Article2 from './article_2';
import Article3 from './article_3';

export default props => {
    console.log('Articles props:' , props);

    const { path } = props.match;

    console.log('Path:', path);

    return (
        <div>
            <h1>Here are some articles</h1>

            <ul>
                <li>
                    <Link to={`${path}/1`}>Article 1</Link>
                </li>
                <li>
                    <Link to={`${path}/2`}>Article 2</Link>
                </li>
                <li>
                    <Link to={`${path}/3`}>Article 3</Link>
                </li>
            </ul>

            <Route path={`${path}/1`} component={Article1} />
            <Route path={`${path}/2`} component={Article2} />
            <Route path={`${path}/3`} component={Article3} />
        </div>
    )
};