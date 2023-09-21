import dynamic from "next/dynamic";
import styled from "styled-components";
import { Card, Label } from "@/components/ui";

const VectorRate = dynamic(
  () => import("@/components/ui/visuals/vector-rate"),
  { ssr: false }
);

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
  color: ${(props) => (props.theme.value === "dark" ? "#FFF" : "#017fb2")};
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

export default Rate;
