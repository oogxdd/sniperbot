import Table from "./table";
import { Label } from "@/components/ui";

const Transactions = () => (
  <div className="flex flex-col">
    <Label>Owner Transactions</Label>
    <Table />
  </div>
);

export default Transactions;
