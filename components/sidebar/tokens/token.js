import styled from "styled-components";

const Token = ({
  name = "PawSwap",
  address = "0x08620149...AD70BC71FB",
  isRef = false,
}) => {
  return (
    <TokenContainer className="flex cursor-pointer -mx-5">
      <TokenIconWrapper>
        <TokenIcon />
      </TokenIconWrapper>
      <div className="flex flex-col">
        <TokenName>{name}</TokenName>
        <TokenAddress>{address}</TokenAddress>
        {isRef && <Badge>REF</Badge>}
      </div>
    </TokenContainer>
  );
};

const TokenContainer = styled.div`
  padding: 14px 20px;
  :hover {
    background: ${(props) =>
      props.theme.value === "dark"
        ? "linear-gradient(90deg, #323233 0.7%, #1D1D22 100%)"
        : "linear-gradient(90deg, #d4dce7 0.7%, rgba(212, 220, 231, 0) 100%)"};
  }
`;

const Badge = styled.span`
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.15px;
  border-radius: 10px;

  color: #459e4d;

  ${(props) =>
    props.theme.value === "dark"
      ? `
border: 1px solid #75C57C;
background: linear-gradient(180deg, #1D1D22 0%, #2E2E35 100%);

  `
      : `

  border: 1px solid #75c57c;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  box-shadow: 0px 1px 3px 0px rgba(236, 236, 236, 0.6);
  `}

  padding: 7px 10px;
  width: min-content;
  margin-top: 10px;
`;

const TokenIconWrapper = styled.div.attrs({
  className: "flex items-center justify-center",
})`
  background: #017fb2;
  border-radius: 100%;
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

const TokenIcon = styled.img.attrs({
  className: "inline-block",
  src: "icons/user-03.svg",
})`
  width: 16px;
  height: 16px;
`;
const TokenName = styled.span.attrs({ className: "" })`
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 4px;
`;
const TokenAddress = styled.span.attrs({ className: "" })`
  color: ${(props) => props.theme.textSecondary};
`;

export default Token;
