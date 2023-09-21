import { Card, LabelValuePair, Label } from "@/components/ui";

const DeployerSection = () => (
  <div className="flex flex-col w-full">
    <Label>Deployer</Label>
    <Card
      className="flex flex-col w-full"
      style={{
        minHeight: 282,
      }}
    >
      <LabelValuePair
        label="Address"
        value="0xa018e07d7c7d4d ... 2d09aac97dffced"
      />
      <LabelValuePair label="Amount" value="146.650265682 ETH" />
      <div className="flex justify-between">
        <LabelValuePair label="Funded" value="BYBIT" />
        <LabelValuePair label="Balance" value="$25,790,652.00" />
      </div>
      <LabelValuePair label="Age" value="79579 min ,12 sec" />
    </Card>
  </div>
);

export default DeployerSection;
