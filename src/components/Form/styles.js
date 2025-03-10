import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  transition: border 0.5s ease;
  

  &:focus {
    border: 1px solid #4A90E2;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    cursor: pointer;
    margin-left: 20px;
    margin-right: 5px;
    accent-color:#1F1F1F;
    margin-top: 0;
    
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  color:  #007ACC ;
  border: 2px solid #007ACC;
  font-weight: bold;
  transition: 0.5s ease;

  &:hover{
  background-color: #007ACC;
  color:  #fff ;
  
  }
`;