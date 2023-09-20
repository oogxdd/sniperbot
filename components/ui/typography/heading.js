import styled from "styled-components";

export const Heading = styled.h2.attrs({ className: "" })`
  color: ${(props) => (props.theme.value === "dark" ? "#FFF" : "#0f0822")};
  font-family: Sequel Sans;
  font-size: 25px;
  font-style: normal;
  font-weight: 415;
  line-height: normal;
  margin-bottom: 14px;
`;

export default Heading;
