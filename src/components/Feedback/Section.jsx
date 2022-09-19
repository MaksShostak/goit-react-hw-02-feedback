import React from "react";
import PropTypes from "prop-types";
import { SectionFeedback,SectionTitle } from "./Section.styled"


export const Section = ({title,children}) => {
    return (<SectionFeedback>
        <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionFeedback>)
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}