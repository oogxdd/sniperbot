import styled from "styled-components";
import { Label } from "@/components/ui";

const Divider = styled.div.attrs({ className: "mx-14" })`
  width: 1px;
  height: 40px;
  margin: 0 56px;
  background: ${(props) =>
    props.theme.value === "light" ? "#E4E4E5" : "2F2F30"};
  @media (max-width: 768px) {
    display: none;
  }
`;

const StatsDetails = () => (
  <StatsContainer className="flex flex-col flex-wrap w-full">
    <Label>Information</Label>
    <div className="hidden md:flex flex-wrap items-center ">
      <div className="flex flex-wrap w-full items-start mb-9 ">
        <div className="w-1/2 md:w-auto flex items-center">
          <StatsItem
            label="Network"
            value={
              <>
                <img
                  src="icons/tether.png"
                  style={{ marginRight: 6, width: 20, height: 20 }}
                />
                <span>Tether</span>
              </>
            }
          />
          <Divider />
        </div>
        <div className="w-1/2 md:w-auto flex items-center">
          <StatsItem label="Tax" value="0.0% | 0.0%" />
          <Divider />
        </div>
        <div className="w-1/2 md:w-auto flex items-center">
          <StatsItem
            label="LP lock"
            value={
              <span>
                <span>{`100.00 `}</span>
                <span style={{ fontSize: 14 }}>Unicrypt</span>
              </span>
            }
          />
          <Divider />
        </div>
        <div className="w-1/2 md:w-auto flex items-center">
          <StatsItem label="Honeypot" value="Sellable" />
          <Divider />
        </div>
        <div className="w-1/2 md:w-auto flex items-center">
          <StatsItem label="Alpha Wallets" value="2,263,000" />
        </div>
      </div>
      <div className="flex flex-wrap w-full items-center"></div>
      <div className="w-1/2 md:w-auto flex items-center">
        <StatsItem label="Marketcap" value="$51.51k  → $470.11k" />
        <Divider />
      </div>
      <div className="w-1/2 md:w-auto flex items-center">
        <StatsItem label="ATH Marketcap" value="1.38M" />
        <Divider />
      </div>
      <div className="w-1/2 md:w-auto flex items-center">
        <StatsItem label="Liquidity" value="$41.27k → $135.20k" />
        <Divider />
      </div>
      <div className="w-1/2 md:w-auto flex items-center">
        <StatsItem label="Snipers" value="800k" />
      </div>
    </div>
    <div className="flex md:hidden flex-wrap space-y-6">
      <div className="flex justify-between w-full">
        <div className="w-1/2">
          <StatsItem
            label="Network"
            value={
              <>
                <img
                  src="icons/tether.png"
                  style={{ marginRight: 6, width: 20, height: 20 }}
                />
                <span>Tether</span>
              </>
            }
          />
        </div>
        <div className="w-1/2">
          <StatsItem label="Tax" value="0.0% | 0.0%" />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="w-1/2">
          <StatsItem
            label="LP lock"
            value={
              <span>
                <span>{`100.00 `}</span>
                <span style={{ fontSize: 14 }}>Unicrypt</span>
              </span>
            }
          />
        </div>
        <div className="w-1/2">
          <StatsItem label="Honeypot" value="Sellable" />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="w-1/2">
          <StatsItem label="Alpha Wallets" value="2,263,000" />
        </div>
        <div className="w-1/2">
          <StatsItem label="Marketcap" value="$51.51k  → $470.11k" />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="w-1/2">
          <StatsItem label="ATH Marketcap" value="1.38M" />
        </div>
        <div className="w-1/2">
          <StatsItem label="Liquidity" value="$41.27k → $135.20k" />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <StatsItem label="Snipers" value="800k" />
      </div>
    </div>
  </StatsContainer>
);

const StatsContainer = styled.div.attrs({ className: "" })`
  margin-bottom: 46px;
`;

const StatsItem = ({ label = "label", value = "value" }) => (
  <div className="flex flex-col" style={{ marginRight: 56 }}>
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

const StatsItemValue = styled.span.attrs({
  className: "flex items-center w-full",
})`
  color: ${(props) => props.theme.textPrimary};
  text-wrap: nowrap;
  font-family: Sequel Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 415;
  line-height: normal;
`;

export default StatsDetails;
