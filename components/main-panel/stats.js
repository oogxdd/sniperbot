import styled from "styled-components";
import { Label } from "@/components/ui";

const Stats = () => (
  <StatsContainer className="flex flex-col flex-wrap w-full">
    <Label>Trades</Label>
    <div className="grid grid-cols-2 gap-x-12 gap-y-26px md:grid-cols-5">
      <StatsItem label="First TXN sent" value="From 1d 39m" />
      <StatsItem label="Last TXN" value="39 mins ago" />
      <StatsItem label="Total Transactions" value="25,396" />
      <StatsItem label="Holders" value="18,592" />
      <StatsItem
        label="Transactions TAX"
        value={
          <span>
            Buy 3.2<span style={{ color: "#75C57C" }}>%</span> / Sell 0
            <span style={{ color: "#F04848" }}>%</span>
          </span>
        }
      />
    </div>
  </StatsContainer>
);

const StatsContainer = styled.div.attrs({ className: "" })`
  margin-bottom: 46px;
`;

const StatsItem = ({ label = "label", value = "value" }) => (
  <div className="flex flex-col">
    <StatsItemLabel>{label}</StatsItemLabel>
    <StatsItemValue>{value}</StatsItemValue>
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

export default Stats;
