import React from 'react';

import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div className="App">
            This is APP component

            <Accordion title={'menu'} collapsed={false}/>
            <Accordion title={'Users'}collapsed={true}/>
            <Rating  value = {5}/>
            <Rating value = {3}/>
            <Rating value = {1}/>
            <OnOff />
        </div>
    );
}




export default App;
