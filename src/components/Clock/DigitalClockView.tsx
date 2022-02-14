import React from "react";
import {ClockViewPropsType, getTwoNumberSeconds} from "./Clock";

export const DigitalClockView=({data}:ClockViewPropsType)=>{
	return <div><span>{getTwoNumberSeconds(data.getHours())}</span>
		:<span>{getTwoNumberSeconds(data.getMinutes())}</span>
		:<span>{getTwoNumberSeconds(data.getSeconds())}</span></div>

}