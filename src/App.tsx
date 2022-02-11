import React, {useState} from 'react';

import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlAccordion} from "./components/UnControlAccordion/Accordion";
import {UnControlRating} from "./components/UnControlRating/UnControlRating";
import {UnControlOnOff} from "./components/UnControlOnOff/UnControlOnOff";

function App() {
    const [RatingValue, setRatingValue] = useState(0)
    const [collapsed, setCollapsed] = useState(false)
    const [switchOn,setSwitchOn]=useState(false)
    return (
        <div className="App">
            This is APP component

            <Accordion title={'menu'}
                       collapsed={collapsed}
                       setCollapsed={setCollapsed}
            />

            <Rating
                value={5}
                RatingValue={RatingValue}
                setRatingValue={setRatingValue}
            />
        <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>


            <UnControlAccordion title={'UnMenu'}/>
            <UnControlRating/>
        </div>
    );
}


export default App;
