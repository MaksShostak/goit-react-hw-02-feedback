import styled from 'styled-components';
export const ComponentStat = styled.p`
  margin-bottom: ${props => props.theme.space[5]}px;
  &:last-child {
    color: ${props => props.theme.colors.muted};
    border: ${props => props.theme.borders.normal};
    text-align: center;
    border-radius: ${props => props.theme.radii.lg};
    background-color: ${props => props.theme.colors.mycolor};
    padding: ${props => props.theme.space[4]}px;
  }
`;
export const StatisticsTitle = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.space[6]}px;
`;
