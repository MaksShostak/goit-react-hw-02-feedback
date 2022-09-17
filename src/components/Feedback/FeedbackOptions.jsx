import React from "react"

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (<div> {options.map((option, index) =>
    { return <button key={index} type="button" onClick={()=>onLeaveFeedback(option)}>{option}</button> })}
            </div>)
}
