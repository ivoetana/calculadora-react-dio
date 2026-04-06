import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 85px;
  margin-bottom: 4px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: relative;

  input {
    width: 100%;
    height: 85px;
    background-color: #595a59;
    border: 0;
    text-align: right;
    padding: 0 10px;
    border-radius: 8px;

    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #fff;
  }

  .history{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #ccc;
    padding: 0 10px;
  }
`;
