import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Greeting from './greeting';
import Clock from './clock';

// Greeting Demo
// const App = () => (
//     <div>
//         <div className="app">
//             <Greeting name="Esther" favColor="Pink" />
//             <Greeting name="Invisible Man" favColor="purple" number={7}/>
//                 <img src={logo} className="logo rotate"/>
//                 <h1>Welcome to React</h1>
//         </div>
//     </div>
// );

// export default App;


// Clock Demo
const App = () => (
    <div>
        <div className="app">
            <Clock />
        </div>
    </div>
);

export default App;
