import React from "react";
type AccordionType={
    title:string
    collapsed:boolean
    setCollapsed:(collapsed:boolean)=>void
}
export const Accordion = (props:AccordionType) => {

        return (
            <div>

                <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} collapsed={!props.collapsed}/>
                {props.collapsed ===false && <AccordionBody/>}

            </div>

        )

}
type AccordionTitleType={
    title:string
    setCollapsed:(collapsed:boolean)=>void
    collapsed:boolean
}
const AccordionTitle = (props:AccordionTitleType) => {
    return <h3 onClick={()=>{props.setCollapsed(props.collapsed)} }>{props.title}</h3>
}
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}