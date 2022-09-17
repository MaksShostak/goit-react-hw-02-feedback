import React from "react";

export const Statistics = ({good,neutral,bad,total,positivePercentage}) => {
    
    return (
        <><h2>Statistics</h2><p>Good: {good}</p><p>Neutral: {neutral}</p><p>Bad: {bad}
        </p><p>Total: {total}</p><p>Positivw Feedback: {positivePercentage}%</p></>
    )
}