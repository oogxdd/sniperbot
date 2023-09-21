import styled from "styled-components";

export const LabelValuePair = ({ label = "label", value = "value" }) => (
  <div className="flex flex-col w-full" style={{ marginBottom: 24 }}>
    <PairLabel>{label}</PairLabel>
    <PairValue>{value}</PairValue>
  </div>
);

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
