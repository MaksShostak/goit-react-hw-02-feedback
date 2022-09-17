import React from "react"
import PropTypes from "prop-types";
import { FeedbackWrapper,OptionButton } from "./FeedbackOptions.styled"
export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (<FeedbackWrapper> {options.map((option, index) =>
    { return <OptionButton key={index} type="button" onClick={()=>onLeaveFeedback(option)}>{option}</OptionButton> })}
            </FeedbackWrapper>)
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback:PropTypes.func
    
}