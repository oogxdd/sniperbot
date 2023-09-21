import styled from "styled-components";
import { Card, Label } from "@/components/ui";

const Overview = ({ taggled = true }) => (
  <div className="flex flex-col" style={{ marginBottom: 46 }}>
    <Label>Overview</Label>
    <OverviewContainer>
      <div className="flex flex-col w-full">
        <div className="flex justify-between grid grid-cols-2 md:grid-cols-4 gap-y-5 md:gap-y-0 w-full">
          <OverviewItem type="name" value="Flash 3.0" />
          <OverviewItem type="symbol" value="FLASH" />
          <OverviewItem type="exchange" value="Binance co." />
          <OverviewItem type="etherscan" value="Transaction" />
        </div>
        {taggled && (
          <div className="flex flex-col" style={{ marginTop: 22 }}>
            <OverviewItemLabel>Taggled from</OverviewItemLabel>
            <TaggledContainer>
              <TaggledValue>mzxF6Qvbm86TuNSb1PMWf8WtknkD4s5T6L</TaggledValue>
              <CopyButton>
                <span>Copy</span>
                <CopyIcon />
              </CopyButton>
            </TaggledContainer>
          </div>
        )}
      </div>
    </OverviewContainer>
  </div>
);

const TaggledContainer = styled.div.attrs({
  className: "flex w-full justify-between items-center",
})`
  margin-top: 4px;
  padding: 7px 12px;
  border-radius: 10px;

  ${(props) =>
    props.theme.value === "light"
      ? `
border-radius: 10px;
border: 1px solid #75C57C;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
box-shadow: 0px 1px 3px 0px rgba(236, 236, 236, 0.60);
  `
      : `

  border: 1px solid #75c57c;
  background: linear-gradient(180deg, #1d1d22 0%, #1d1d22 100%);
  `}
`;
const TaggledValue = styled.div.attrs({
  className: "",
})`
  color: ${(props) => (props.theme.value === "light" ? "#459E4D" : "#75c57c")};
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.15px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CopyButton = styled.button.attrs({
  className: "cursor-pointer flex items-center",
})`
  color: #68717d;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  :hover {
    opacity: 0.9;
  }
`;
const CopyIcon = styled.img.attrs({
  className: "",
  src: "/icons/copy-01.svg",
})`
  margin-left: 6px;
`;

const OverviewContainer = styled(Card).attrs({
  className: "",
})`
  padding: 26px 39px 26px 24px;
`;

const OverviewItem = ({ type, value = "value" }) => {
  let icon = "";

  switch (type) {
    case "name":
      icon = <OverviewNameIcon />;
      break;
    case "symbol":
      icon = <OverviewSymbolIcon />;
      break;
    case "exchange":
      icon = <OverviewExchangeIcon />;
      break;
    case "etherscan":
      icon = <OverviewEtherscanIcon />;
      break;
  }
  return (
    <div className="flex items-center">
      {icon}
      <div className="flex flex-col">
        <OverviewItemLabel>{type}</OverviewItemLabel>
        <OverviewItemValue>{value}</OverviewItemValue>
      </div>
    </div>
  );
};

const OverviewNameIcon = styled.img.attrs({
  className: "mr-2.5",
  src: "icons/wallet-03.svg",
  alt: "",
})``;
const OverviewSymbolIcon = styled.img.attrs({
  className: "mr-2.5",
  src: "icons/receipt.svg",
  alt: "",
})``;
const OverviewExchangeIcon = styled.img.attrs({
  className: "mr-2.5",
  src: "icons/align-horizontal-centre-01.svg",
  alt: "",
})``;
const OverviewEtherscanIcon = styled.img.attrs({
  className: "mr-2.5",
  src: "icons/etherscan-logo-circle 1.svg",
  alt: "",
})``;

const OverviewItemLabel = styled.span.attrs({ className: "" })`
  color: ${(props) => props.theme.textSecondary};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 4px;
`;
const OverviewItemValue = styled.span.attrs({ className: "" })`
  color: ${(props) => props.theme.textPrimary};
  font-family: Sequel Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 415;
  line-height: normal;
`;

export default Overview;
