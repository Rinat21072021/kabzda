import React, {useState} from "react";
type AccordionType={
    title:string

}
export const UnControlAccordion = (props:AccordionType) => {

const [collapsed, setCollapsed]=useState(false)
        return (
            <div>

                <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={!collapsed}/>
                {/*<button onClick={()=>setCollapsed(!collapsed)}>Toggle</button>*/}
                {collapsed ===false && <AccordionBody/>}

            </div>

        )

}
type AccordionTitleType={
    title:string
    setCollapsed:(collapsed:boolean)=>void
    collapsed:boolean
}
const AccordionTitle = (props:AccordionTitleType) => {
    return <h3 onClick={()=>{props.setCollapsed(props.collapsed)}}>{props.title}</h3>
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