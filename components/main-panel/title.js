import styled from "styled-components";

const Title = () => (
  <div classname="flex flex-col" style={{ marginBottom: 26 }}>
    <TitleText>You portfolio balance is</TitleText>
    <br />
    <TitleText primary>$208,730.520</TitleText>
  </div>
);

const TitleText = styled.span.attrs({ className: "" })`
  color: ${(props) =>
    props.primary ? props.theme.primaryText : props.theme.textPrimary};
  font-family: Sequel Sans;
  font-size: 38px;
  font-style: normal;
  font-weight: 420;
  line-height: normal;
`;

export default Title;
