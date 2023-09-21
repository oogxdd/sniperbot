import styled from "styled-components";

const CoinInfo = () => (
  <Container>
    <Avatar src="/icons/image 98.png" />
    <Label>dPARROT (Parrot)</Label>
  </Container>
);

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100%;
`;

const Container = styled.div.attrs({
  className: "flex flex-row items-center space-x-4",
})`
  margin-bottom: 22px;
`;

const Label = styled.div.attrs({ className: "" })`
  color: ${(props) => props.theme.textPrimary};
  font-family: Sequel Sans;
  font-size: 38px;
  font-style: normal;
  font-weight: 420;
  line-height: normal;

  @media (max-width: 768px) {
    ${(props) =>
      props.theme.value === "light" ? "color: #2B8A36 !important;" : ""}
  }
`;

export default CoinInfo;
