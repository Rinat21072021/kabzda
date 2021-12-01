import React from "react";
type RatingProps={
    value:number
}
type StarType={
    selected:boolean
}
export const Rating = (props:RatingProps) => {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>

        </div>
    )
}
const Star = (props: StarType) => {

    if (props.selected === true) {
        return <span><b>Star</b> </span>
    } else {
        return <span>Star</span>
    }


}