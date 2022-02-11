import React from "react";
type RatingProps={
    RatingValue:number
    setRatingValue:(value:number)=>void
    value:number

}
type StarType={
    selected:boolean
    setRatingValue:(value:number)=>void
    RatingValue:number
}
export const Rating = (props:RatingProps) => {
    return (
        <div>
            <Star selected={props.value > 0} setRatingValue={props.setRatingValue} RatingValue={props.RatingValue} />
            <Star selected={props.value > 1} setRatingValue={props.setRatingValue} RatingValue={props.RatingValue}/>
            <Star selected={props.value > 2} setRatingValue={props.setRatingValue} RatingValue={props.RatingValue}/>
            <Star selected={props.value > 3} setRatingValue={props.setRatingValue} RatingValue={props.RatingValue}/>
            <Star selected={props.value > 4} setRatingValue={props.setRatingValue} RatingValue={props.RatingValue}/>

        </div>
    )
}
const Star = (props: StarType) => {

    return <span onClick={()=>{props.setRatingValue(props.RatingValue)}}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>

}