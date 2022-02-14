import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
	mode: "Analog" | "Digital"
}
export const getTwoNumberSeconds = (num: number) => {
	return num < 10 ? "0" + num : num
}
export const Clock = (props: PropsType) => {
	const [data, setData] = useState(new Date())

	useEffect(() => {
		const intId = setInterval(() => {
			setData(new Date())
		}, 1000)
		return () => {
			clearInterval(intId)
		}
	}, [])


	let view
	switch (props.mode) {
		case "Analog":
			view = <AnalogClockView data={data}/>
			break
		case "Digital":
		default:
			view = <DigitalClockView data={data}/>

	}
	return <div>
		{view}
	</div>

}
export type ClockViewPropsType={
	data:Date
}

