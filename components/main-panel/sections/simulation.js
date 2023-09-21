import { Card, LabelValuePair, Label } from "@/components/ui";

const SimulationSection = () => (
  <div className="flex flex-col w-full">
    <Label>Simulation</Label>
    <Card
      className="flex flex-col w-full"
      style={{
        minHeight: 282,
      }}
    >
      <LabelValuePair label="Enable" value="0x8a8c523c - enableTrading()" />
      <LabelValuePair label="Max Tx" value="20000000000000000000000" />
      <div className="flex justify-between">
        <LabelValuePair label="Buy Tax" value="20.00%" />
        <LabelValuePair label="Sell Tax" value="25.31%" />
      </div>
      <div className="flex justify-between">
        <LabelValuePair label="Buy Gas" value="287708" />
        <LabelValuePair label="Sell Gas" value="263442" />
      </div>
    </Card>
  </div>
);

export default SimulationSection;
