import styled from 'styled-components';
export const SectionFeedback = styled.section`
  background-color: ${props => props.theme.colors.primary};
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.space[7]}px;
`;
export const SectionTitle = styled.h1`
  margin-bottom: ${props => props.theme.space[6]}px;
`;
