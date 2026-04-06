import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  margin: 4px;
  border: 1px solid #9a9999;
  border-radius: 10px;
  background-color: #cdcdcd;
  font-size: 24px;
  font-weight: 700;
  flex: 1;

  &:nth-child(1) {
    margin-left: 8px;
  }

  &:nth-child(4) {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
