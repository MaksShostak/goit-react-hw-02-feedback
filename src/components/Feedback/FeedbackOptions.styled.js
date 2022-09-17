import styled from 'styled-components';
export const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: ${props => props.theme.space[4]}px;
`;
export const OptionButton = styled.button`
  width: 200px;
  height: 60px;
  font-size: ${props => props.theme.fontSizes.l};
  background-color: ${props => props.theme.colors.mycolor};
  cursor: pointer;
  transition: all ease-in-out 500ms;
  border-radius: ${props => props.theme.radii.md};
  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.accent};
  }
`;
