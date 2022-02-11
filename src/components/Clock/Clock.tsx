import React, {useEffect, useState} from "react";

type PropsType = {}
export const Clock = (props: PropsType) => {
	const [data, setData] = useState(new Date())

	useEffect(() => {
		setInterval(() => {
			setData(new Date())
		}, 1000)
	}, [])

	const getTwoNumberSeconds = (num: number) => {
		return num < 10  ? "0" + num : num
	}
	return <div>
		<span>{getTwoNumberSeconds(data.getHours())}</span>
		:<span>{getTwoNumberSeconds(data.getMinutes())}</span>
		:<span>{getTwoNumberSeconds(data.getSeconds())}</span>
	</div>
}