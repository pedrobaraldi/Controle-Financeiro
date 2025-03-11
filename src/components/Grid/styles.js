import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;
export const ButtonContainer = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  display: flex;
  justify-content: end;
  gap: 15px;
`;

export const Button = styled.button`
  padding: 12px 12px;
  margin: 5px ;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007ACC;
  color: white;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    background-color: #005f99;
  }
`;
