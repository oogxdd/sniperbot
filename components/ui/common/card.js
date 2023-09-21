import styled from "styled-components";

export const Card = styled.div.attrs({
  className: "flex",
})`
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.cardBorder};
  background: ${(props) => props.theme.cardBg};
  box-shadow: ${(props) => props.theme.cardShadow};
  padding: 26px;
`;

export default Card;
