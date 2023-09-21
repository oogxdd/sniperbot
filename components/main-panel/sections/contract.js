import { Card, Button, LabelValuePair, Label } from "@/components/ui";

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
      <LabelValuePair label="Address" value="Fiery · FI" />
      <div className="flex justify-between">
        <LabelValuePair label="Decimals" value="18" />
        <LabelValuePair label="Total Supply" value="1,000,000" />
      </div>
      <Button rounded>Functions</Button>
    </Card>
  </div>
);

export default ContractSection;
