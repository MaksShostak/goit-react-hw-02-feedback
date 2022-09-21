import React from 'react';
import PropTypes from 'prop-types';
import { ComponentStat, StatisticsTitle } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <ComponentStat>Good: {good}</ComponentStat>
      <ComponentStat>Neutral: {neutral}</ComponentStat>
      <ComponentStat>Bad: {bad}</ComponentStat>
      <ComponentStat>Total: {total}</ComponentStat>
      <ComponentStat>Positiv Feedback: {positivePercentage}%</ComponentStat>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
