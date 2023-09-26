import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 12px;
  padding: 48px;
  background: linear-gradient(to bottom, #a612e1, #e0b5f1);
  border-radius: 10px;

`;

export const FeedbackBtn = styled.button`
  padding: 12px 32px;
  border-radius: 10px;
  border: 2px solid #fff;
  background-color: #9b72de;
  font-size: 24px;
  color: #161515;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: ##9b72d;
    background-color: #fff;
    border: 2px solid ##9b72d;
  }
`;
