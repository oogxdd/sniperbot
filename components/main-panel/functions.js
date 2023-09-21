import styled from "styled-components";
import { Card, Label } from "@/components/ui";

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

export default Functions;
