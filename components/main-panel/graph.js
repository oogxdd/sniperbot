import styled from "styled-components";

const Graph = () => (
  <GraphContainer>
    <div
      className="flex flex-col justify-between hidden md:flex h-full"
      style={
        {
          // minWidth: 245
        }
      }
    >
      <div className="flex flex-col">
        <Label className="mb-2.5">Balance report</Label>
        <Hint className="">Jul 1, 2023 - Oct 1, 2023</Hint>
      </div>
      <div className="flex flex-col">
        <div className="flex mb-2.5">
          <Hint>Balance</Hint>
          <Hint plus>+4.72%</Hint>
        </div>
        <Label large className="mb-2">
          1820.993 ETH
        </Label>
        <Hint className="mb-">Increase increased 35% from last month</Hint>
      </div>
    </div>
    <TradingView />
  </GraphContainer>
);

const GraphContainer = styled.div.attrs({ className: "flex flex-row w-full" })`
  margin-bottom: 48px;
  z-index: 1;
  padding: 26px;
  min-height: 244px;
  border-radius: 10px;
  background: #017fb2;
  ${(props) =>
    props.theme.value === "light" &&
    `
box-shadow: 0px 4px 10px 0px rgba(237, 239, 241, 0.40);
  `}
`;
const Label = styled.div.attrs({ className: "" })`
  color: #fff;
  font-family: Sequel Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 420;
  line-height: normal;
  letter-spacing: -0.18px;
  ${(props) =>
    props.large &&
    `
font-size: 28px;
font-weight: 415;
letter-spacing: -0.28px
  `}
`;
const Hint = styled.div.attrs({ className: "" })`
  color: #88d4f2;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.195px;
  ${(props) =>
    props.plus &&
    `
    color: #38DA66;
    margin-left: 6px;
    font-weight: 500;
  `}
`;
const TradingView = styled.img.attrs({
  className: "hidden md:block w-full height-full",
  src: "/images/Graph.png",
})`
  // background: #005e84;
  border-radius: 5px;
  margin-left: 49px;
  object-fit: contain;
`;

export default Graph;
