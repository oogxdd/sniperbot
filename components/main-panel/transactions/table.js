import styled from "styled-components";
import { Button } from "@/components/ui";

const rows = new Array(9).fill(null).map(() => ({
  icon: "",
  asset: "Tether USDT",
  assetWallet: "0x71ed...298D",
  date: "2 days ago",
  dateHash: "mhRbyZQAU ... pwvQQR5PW",
  value: "4864652",
  txFee: "3596501256123",
  method: "_hasLiqBeenAdded()",
}));

const TableComponent = () => (
  <TableWrapper>
    <Table className="min-w-full divide-y">
      <thead className="">
        <tr>
          <Th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
          >
            Assets / From
          </Th>
          <Th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold "
          >
            Date / To
          </Th>
          <Th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold"
          >
            Value
          </Th>
          <Th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold"
          >
            Txn Fee
          </Th>
          <Th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold"
          >
            Method
          </Th>
          <Th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Details</span>
          </Th>
        </tr>
      </thead>
      <TBody className="divide-y">
        {rows.map((row, index) => (
          <tr key={row.asset + index}>
            <Td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium">
              <div className="flex">
                <TableCoinImage src="/icons/tether.png" alt="Tether" />
                <div className="flex flex-col">
                  <span>{row.asset}</span>
                  <TableTextSecondary>{row.assetWallet}</TableTextSecondary>
                </div>
              </div>
            </Td>
            <Td className="whitespace-nowrap px-3 py-4 text-sm">
              <div className="flex flex-col">
                <span>{row.date}</span>
                <TableTextSecondary>{row.dateHash}</TableTextSecondary>
              </div>
            </Td>
            <Td className="whitespace-nowrap px-3 py-4 text-sm">{row.value}</Td>
            <Td className="whitespace-nowrap px-3 py-4 text-sm">{row.txFee}</Td>
            <Td className="whitespace-nowrap px-3 py-4 text-sm">
              {row.method}
            </Td>
            <Td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <Button rounded>Details</Button>
            </Td>
          </tr>
        ))}
      </TBody>
    </Table>
  </TableWrapper>
);

const TableWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.cardBorder};
  background: ${(props) => props.theme.cardBg};
  box-shadow: ${(props) => props.theme.cardShadow};
  max-height: 640px;
  overflow: auto;
`;

const Table = styled.table``;

const Th = styled.th`
  color: #868d96;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.195px;
`;

const TBody = styled.tbody`
  .divide-y > :not([hidden]) ~ :not([hidden]) {
    border-top-color: ${(props) => props.theme.borderColor};
  }
  tr:first-child td {
    border-top: 1px solid ${(props) => props.theme.borderColor};
  }
  tr:last-child td {
    border-bottom: none;
  }
`;

const Td = styled.td`
  color: ${(props) => props.theme.textPrimary};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  font-family: Sequel Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 415;
  line-height: normal;
`;

const TableCoinImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 14px;
`;

const TableTextSecondary = styled.span`
  color: ${(props) => props.theme.searchLabelColor};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
`;

export default TableComponent;
