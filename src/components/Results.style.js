import styled from "styled-components";

export const Li = styled.li`
  width: 400px;
  list-style: none;
  margin: 0.5rem 0 0.5rem 0;

  background-color: ${(props) => (props.isFocus ? "lightgray" : "#fff")};
`;
