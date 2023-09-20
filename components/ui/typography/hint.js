import styled from "styled-components";

export const Hint = styled.span.attrs({ className: "" })`
  color: ${(props) => props.theme.searchLabelColor};
`;

export default Hint;
