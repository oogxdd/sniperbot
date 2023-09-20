import styled from "styled-components";

export const Subheading = styled.h3.attrs({ className: "" })`
  color: ${(props) => props.theme.searchLabelColor};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export default Subheading;
