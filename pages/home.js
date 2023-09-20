import dynamic from "next/dynamic";
import { useState } from "react";
import { useTheme } from "@/hooks";

import styled from "styled-components";
import Button from "@/components/ui/button";

import Popup from "@/components/popup";

const VectorBg = dynamic(() => import("@/components/ui/visuals/vector-bg"), {
  ssr: false,
});
const VectorRate = dynamic(
  () => import("@/components/ui/visuals/vector-rate"),
  {
    ssr: false,
  }
);

export default function HomePage() {
  const { toggleTheme, showPopup, setShowPopup } = useTheme();

  return (
    <div
      className="h-full md:max-h-screen flex flex-col md:flex-row overflow-auto md:overflow-hidden"
      // onClick={toggleTheme}
      // onClick={() => setShowPopup(!showPopup)}
    >
      <Sidebar />
      {/*
       */}
      <MainPanel />
      {showPopup && <Popup />}
    </div>
  );
}

const MobileHeader = () => {
  return (
    <MobileHeaderContainer
      className="flex md:hidden"
      style={{ marginBottom: 70 }}
    >
      <Logo />
    </MobileHeaderContainer>
  );
};

const MobileHeaderContainer = styled.div`
  background: ${(props) => props.theme.mainBg};
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="flex flex-col items-start">
        <Logo />
        <Search />
        <Tokens />
      </div>
      <AddTokenButton />
    </SidebarContainer>
  );
};

const Card = styled.div.attrs({
  className: "flex",
})`
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.cardBorder};
  background: ${(props) => props.theme.cardBg};
  box-shadow: ${(props) => props.theme.cardShadow};
  padding: 26px;
`;

const SidebarContainer = styled.div.attrs({
  className:
    "hidden md:flex flex-col justify-between pt-6 pb-5 min-h-screen max-h-screen",
})`
  width: 294px;
  background: ${(props) => props.theme.sidebarBg};
`;

const MainPanel = () => (
  <MainPanelContainer className="overflow-hidden md:overflow-scroll flex flex-col w-full">
    <VectorBg />
    <MobileHeader />
    <Header />
    <Title />
    <Actions />
    <Stats />
    <div
      className="flex flex-col md:flex-row justify-between"
      style={{ marginBottom: 46 }}
    >
      <div
        className="flex flex-col w-full md:w-3/5"
        style={{ marginRight: 20 }}
      >
        <Overview />
        <Rate />
      </div>
      <div className="flex flex-col w-full md:w-2/5">
        <Functions />
      </div>
    </div>
    <div
      className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-36px md:space-y-0"
      style={{ marginBottom: 26 }}
    >
      <ContractSection />
      <DeployerSection />
      <SimulationSection />
    </div>
    <Transactions />
  </MainPanelContainer>
);

const MainPanelContainer = styled.div`
  padding: 24px 46px 76px 46px;
  background: ${(props) => props.theme.mainBg};
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// const Logo = styled.img.attrs({ className: '' })``
const Logo = styled.img.attrs((props) => ({
  className: "mb-4 px-5 mb-0 md:mb-38px",
  src: props.theme.value === "dark" ? "/Logo-dark.svg" : "/Logo.svg",
  alt: "SniperBot",
}))`
  height: 34px;
`;

const Search = () => (
  <div className="flex items-center px-5 mb-47px">
    <SearchIcon />
    <SearchInput placeholder="Search" />
  </div>
);

const SearchIcon = styled.img.attrs({
  className: "inline-block",
  src: "icons/search-sm.svg",
})`
  margin-right: 10px;
`;
const SearchInput = styled.input.attrs({ className: "" })`
  background: transparent;
`;

const Tokens = () => (
  <div className="flex flex-col">
    <Token isRef />
    <Token />
    <Token />
    <Token />
  </div>
);

const Token = ({
  name = "PawSwap",
  address = "0x08620149...AD70BC71FB",
  isRef = false,
}) => {
  return (
    <TokenContainer className="flex cursor-pointer">
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

// <div className="flex flex-col">
// </div>

const AddTokenButton = () => (
  <SidebarButton>
    <span>+ Add Token</span>
  </SidebarButton>
);

const SidebarButton = styled.button.attrs({ className: "mx-5 cursor-pointer" })`
  border-radius: 10px;

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.15px;

  padding: 11px 0px;

  ${(props) =>
    props.theme.value === "dark"
      ? `
border-radius: 10px;
border: 1px solid #45464C;
background: #19191D;
    color: rgba(1, 127, 178, 1);
  `
      : `
  border: 1px solid #d3dce7;
  background: #fff;
  box-shadow: 0px 1px 3px 0px rgba(236, 236, 236, 0.6);
  color: #017fb2;

  `}
`;
// const PlusIcon = styled.img.attrs({ className: "",
//   src: 'icons/'
// })``;

const Header = () => (
  <div
    className="hidden md:flex items-center justify-between w-full"
    style={{ marginBottom: 58 }}
  >
    <div className="flex items-center">
      <HeaderLink dropdown>Investments</HeaderLink>
      <HeaderLink>Resources</HeaderLink>
      <HeaderLink>News</HeaderLink>
      <HeaderLink>Portfolio</HeaderLink>
    </div>
    <div className="flex items-center space-x-2.5">
      <Button rounded>
        <ToggleWalletsIcon />
        Toggle wallets
      </Button>
      <Button
        rounded
        // className="w-min-w"
        // style={{
        //   width: "min-content",
        //   marginLeft: 0,
        // }}
      >
        Log Out
      </Button>
    </div>
  </div>
);

const HeaderLink = ({ children, dropdown, ...props }) => (
  <HeaderLinkStyled {...props}>
    {children}
    {dropdown && (
      <DropdownIconWrapper>
        <DropdownIcon />
      </DropdownIconWrapper>
    )}
  </HeaderLinkStyled>
);

const HeaderLinkStyled = styled.a.attrs({ className: "" })`
  color: ${(props) => props.theme.headerLinkColor};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 28px;
`;
const DropdownIconWrapper = styled.div.attrs({
  className: "inline-flex items-center justify-center",
})`
  margin-left: 6px;
  background: ${(props) =>
    props.theme.value === "light" ? "rgba(229, 233, 240, 1)" : "#25262C"};
  width: 16px;
  height: 16px;
  border-radius: 100%;
`;
const DropdownIcon = styled.img.attrs((props) => ({
  className: "",
  src:
    props.theme.value === "dark"
      ? "icons/down-chevron-dark.svg"
      : "icons/down-chevron-1.svg",
}))``;

const ToggleWalletsIcon = styled.img.attrs({
  className: "mr-2",
  src: "icons/wallet-01.svg",
})``;

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

const Actions = () => {
  const { toggleTheme, showPopup, setShowPopup } = useTheme();

  return (
    <ActionsContainer className="flex flex-col md:flex-row items-start md:items-center space-y-2.5 md:space-y-0 w-full justify-between">
      <div className="flex items-center space-x-5px md:space-x-2.5">
        <Button primary onClick={() => setShowPopup(!showPopup)}>
          Subscribe / buy
        </Button>
        <Button>Watch</Button>
      </div>
      <div className="flex items-center space-x-5px md:space-x-2.5">
        <Button type="like">
          <LikeIcon />
          <span />I like it
        </Button>
        <Button>
          <DislikeIcon />
          Looks bad
        </Button>
        <Button>
          <DisabledIcon />
          Disabled
        </Button>
      </div>
    </ActionsContainer>
  );
};

const ActionsContainer = styled.div.attrs({ className: "" })`
  margin-bottom: 46px;

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

const LikeIcon = styled.img.attrs({
  className: "mr-1.5",
  src: "icons/heart-rounded.svg",
})``;
const DislikeIcon = styled.img.attrs({
  className: "mr-1.5",
  src: "icons/face-frown.svg",
})``;
const DisabledIcon = styled.img.attrs({
  className: "mr-1.5",
  src: "icons/minus-circle.svg",
})``;

const Stats = () => (
  <StatsContainer className="flex flex-col w-full">
    <Label>Trades</Label>
    <div className="grid grid-cols-2 gap-x-12 gap-y-26px md:grid-cols-5">
      <StatsItem />
      <StatsItem />
      <StatsItem />
      <StatsItem />
      <StatsItem />
    </div>
  </StatsContainer>
);

const StatsContainer = styled.div.attrs({ className: "" })`
  margin-bottom: 46px;
`;

const StatsItem = () => (
  <div className="flex flex-col">
    <StatsItemLabel>First txn sent</StatsItemLabel>
    <StatsItemValue>From 1d 39m</StatsItemValue>
  </div>
);

const StatsItemLabel = styled.span.attrs({ className: "" })`
  color: ${(props) => props.theme.textSecondary};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 5px;
`;
const StatsItemValue = styled.span.attrs({ className: "" })`
  color: ${(props) => props.theme.textPrimary};
  font-family: Sequel Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 415;
  line-height: normal;
`;

const Label = styled.span`
  color: ${(props) => props.theme.textPrimary};
  font-family: Sequel Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 420;
  line-height: normal;
  margin-bottom: 16px;
`;

const Overview = () => (
  <div className="flex flex-col" style={{ marginBottom: 46 }}>
    <Label>Overview</Label>
    <OverviewContainer>
      <OverviewItem type="name" />
      <OverviewItem type="symbol" />
      <OverviewItem type="exchange" />
      <OverviewItem type="etherscan" />
    </OverviewContainer>
  </div>
);

const OverviewContainer = styled(Card).attrs({
  className:
    "flex justify-between grid grid-cols-2 md:grid-cols-4 gap-y-5 md:gap-y-0",
})`
  padding: 26px 39px 26px 24px;
`;

const OverviewItem = ({ type }) => {
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
        <OverviewItemValue>Flash 3.0</OverviewItemValue>
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

const Rate = () => (
  <div className="flex flex-col">
    <Label>Rate</Label>
    <RateContainer>
      <VectorRate />
      <RateNumber>93.6</RateNumber>
      <RateHint>
        This not include risk functions such as mint, burn etc.
        <br />
        with a low tas fee 1%
      </RateHint>
    </RateContainer>
  </div>
);

const RateNumber = styled.span.attrs({ className: "" })`
  color: #017fb2;
  font-family: Sequel Sans;
  font-size: 38px;
  font-style: normal;
  font-weight: 425;
  line-height: normal;
  margin-right: 26px;
`;
const RateHint = styled.span.attrs({ className: "" })`
  color: ${(props) => props.theme.textSecondary};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.21px;
`;

const RateContainer = styled(Card).attrs({
  className: "flex items-center",
})`
  padding: 22px 26px;
  position: relative;
`;

const Functions = () => (
  <div className="flex flex-col">
    <Label>Functions</Label>
    <FunctionsContainer>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
      <Function>_maxTransferAmount()</Function>
    </FunctionsContainer>
  </div>
);

const FunctionsContainer = styled(Card).attrs({
  className: "flex flex-col",
})`
  height: 100%;
  width: 100%;
  padding: 26px 24px;
  overflow: auto;
  max-height: 265px;
`;

const Function = ({ children }) => (
  <div className="flex" style={{ marginBottom: 15 }}>
    <FunctionIcon />
    <FunctionName>{children}</FunctionName>
  </div>
);

const FunctionIcon = styled.img.attrs({
  className: "inline-block",
  src: "icons/code-02.svg",
})``;
const FunctionName = styled.span.attrs({ className: "" })`
  color: ${(props) => props.theme.textPrimary};
  font-family: Sequel Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 415;
  line-height: normal;
`;

const ContractSection = () => (
  <div className="flex flex-col w-full">
    <Label>Contract</Label>
    <Card
      className="flex flex-col w-full h-full"
      style={{
        minHeight: 282,
      }}
    >
      <LabelValuePair label="Name" value="Fiery · FI" />
      <LabelValuePair label="Name" value="Fiery · FI" />
      <div className="flex justify-between">
        <LabelValuePair label="Name" value="Fiery · FI" />
        <LabelValuePair label="Name" value="Fiery · FI" />
      </div>
      <Button rounded>Functions</Button>
    </Card>
  </div>
);

const DeployerSection = () => (
  <div className="flex flex-col w-full">
    <Label>Deployer</Label>
    <Card
      className="flex flex-col w-full"
      style={{
        minHeight: 282,
      }}
    >
      <LabelValuePair label="Name" value="Fiery · FI" />
      <LabelValuePair label="Name" value="Fiery · FI" />
      <div className="flex justify-between">
        <LabelValuePair label="Name" value="Fiery · FI" />
        <LabelValuePair label="Name" value="Fiery · FI" />
      </div>
      <LabelValuePair label="Name" value="Fiery · FI" />
    </Card>
  </div>
);

const SimulationSection = () => (
  <div className="flex flex-col w-full">
    <Label>Simulation</Label>
    <Card
      className="flex flex-col w-full"
      style={{
        minHeight: 282,
      }}
    >
      <LabelValuePair label="Name" value="Fiery · FI" />
      <LabelValuePair label="Name" value="Fiery · FI" />
      <div className="flex justify-between">
        <LabelValuePair label="Name" value="Fiery · FI" />
        <LabelValuePair label="Name" value="Fiery · FI" />
      </div>
      <div className="flex justify-between">
        <LabelValuePair label="Name" value="Fiery · FI" />
        <LabelValuePair label="Name" value="Fiery · FI" />
      </div>
    </Card>
  </div>
);

const LabelValuePair = ({ label = "label", value = "value" }) => (
  <div className="flex flex-col w-full" style={{ marginBottom: 24 }}>
    <PairLabel>{label}</PairLabel>
    <PairValue>{value}</PairValue>
  </div>
);

// const LabelValuePair = styled.div.attrs({ className: 'flex flex-col' })``
const PairLabel = styled.div.attrs({ className: "" })`
  color: ${(props) => props.theme.textSecondary};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 5px;
`;
const PairValue = styled.div.attrs({ className: "" })`
  color: ${(props) => props.theme.textPrimary};
  font-family: Sequel Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 415;
  line-height: normal;
`;

const rows = [
  {
    icon: "",
    asset: "Tether USDT",
    assetWallet: "0x71ed...298D",
    date: "2 days ago",
    dateHash: "mhRbyZQAU ... pwvQQR5PW",
    value: "4864652",
    txFee: "3596501256123",
    method: "_hasLiqBeenAdded()",
  },
  {
    icon: "",
    asset: "Tether USDT",
    assetWallet: "0x71ed...298D",
    date: "2 days ago",
    dateHash: "mhRbyZQAU ... pwvQQR5PW",
    value: "4864652",
    txFee: "3596501256123",
    method: "_hasLiqBeenAdded()",
  },
  {
    icon: "",
    asset: "Tether USDT",
    assetWallet: "0x71ed...298D",
    date: "2 days ago",
    dateHash: "mhRbyZQAU ... pwvQQR5PW",
    value: "4864652",
    txFee: "3596501256123",
    method: "_hasLiqBeenAdded()",
  },
  {
    icon: "",
    asset: "Tether USDT",
    assetWallet: "0x71ed...298D",
    date: "2 days ago",
    dateHash: "mhRbyZQAU ... pwvQQR5PW",
    value: "4864652",
    txFee: "3596501256123",
    method: "_hasLiqBeenAdded()",
  },
  {
    icon: "",
    asset: "Tether USDT",
    assetWallet: "0x71ed...298D",
    date: "2 days ago",
    dateHash: "mhRbyZQAU ... pwvQQR5PW",
    value: "4864652",
    txFee: "3596501256123",
    method: "_hasLiqBeenAdded()",
  },
  {
    icon: "",
    asset: "Tether USDT",
    assetWallet: "0x71ed...298D",
    date: "2 days ago",
    dateHash: "mhRbyZQAU ... pwvQQR5PW",
    value: "4864652",
    txFee: "3596501256123",
    method: "_hasLiqBeenAdded()",
  },
  {
    icon: "",
    asset: "Tether USDT",
    assetWallet: "0x71ed...298D",
    date: "2 days ago",
    dateHash: "mhRbyZQAU ... pwvQQR5PW",
    value: "4864652",
    txFee: "3596501256123",
    method: "_hasLiqBeenAdded()",
  },
  {
    icon: "",
    asset: "Tether USDT",
    assetWallet: "0x71ed...298D",
    date: "2 days ago",
    dateHash: "mhRbyZQAU ... pwvQQR5PW",
    value: "4864652",
    txFee: "3596501256123",
    method: "_hasLiqBeenAdded()",
  },
  {
    icon: "",
    asset: "Tether USDT",
    assetWallet: "0x71ed...298D",
    date: "2 days ago",
    dateHash: "mhRbyZQAU ... pwvQQR5PW",
    value: "4864652",
    txFee: "3596501256123",
    method: "_hasLiqBeenAdded()",
  },
];

const Transactions = () => (
  <div className="flex flex-col">
    <Label>Owner Transactions</Label>
    <TableWrapper>
      <Table className="min-w-full divide-y">
        <thead className="">
          <tr>
            <Th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
            >
              Assets / From
            </Th>
            <Th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold "
            >
              Date / To
            </Th>
            <Th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold"
            >
              Value
            </Th>
            <Th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold"
            >
              Txn Fee
            </Th>
            <Th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold"
            >
              Method
            </Th>
            <Th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Details</span>
            </Th>
          </tr>
        </thead>

        {/*
    icon: '',
    asset: 'Tether USDT',
    assetWallet: '0x71ed...298D',
    date: '2 days ago',
    dateHash: 'mhRbyZQAU ... pwvQQR5PW',
    value: '4864652',
    txFee: '3596501256123',
    method: '_hasLiqBeenAdded()'

    */}
        <TBody className="divide-y">
          {rows.map((row) => (
            <tr key={row.asset}>
              <Td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium">
                <div className="flex">
                  <TableCoinImage src="/icons/tether.png" alt="Tether" />
                  <div className="flex flex-col">
                    <span>{row.asset}</span>
                    <TableTextSecondary>{row.assetWallet}</TableTextSecondary>
                  </div>
                </div>
              </Td>
              <Td className="whitespace-nowrap px-3 py-4 text-sm">
                <div className="flex flex-col">
                  <span>{row.date}</span>
                  <TableTextSecondary>{row.dateHash}</TableTextSecondary>
                </div>
              </Td>
              <Td className="whitespace-nowrap px-3 py-4 text-sm">
                {row.value}
              </Td>
              <Td className="whitespace-nowrap px-3 py-4 text-sm">
                {row.txFee}
              </Td>
              <Td className="whitespace-nowrap px-3 py-4 text-sm">
                {row.method}
              </Td>
              <Td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <Button rounded>Details</Button>
              </Td>
            </tr>
          ))}
        </TBody>
      </Table>
    </TableWrapper>
  </div>
);

const TableWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.cardBorder};
  background: ${(props) => props.theme.cardBg};
  box-shadow: ${(props) => props.theme.cardShadow};
  max-height: 640px;
  overflow: auto;
`;
// overflow: hidden;

// max-height: 315px;
// overflow: auto;
const Table = styled.table``;

const Th = styled.th`
  color: #868d96;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.195px;
`;

const TBody = styled.tbody`
  .divide-y > :not([hidden]) ~ :not([hidden]) {
    border-top-color: ${(props) => props.theme.borderColor};
  }
  tr:first-child td {
    border-top: 1px solid ${(props) => props.theme.borderColor};
  }
  tr:last-child td {
    border-bottom: none;
  }
`;

const Td = styled.td`
  color: ${(props) => props.theme.textPrimary};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  font-family: Sequel Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 415;
  line-height: normal;
`;

const TableCoinImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 14px;
`;

const TableTextSecondary = styled.span`
  color: ${(props) => props.theme.searchLabelColor};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
`;
