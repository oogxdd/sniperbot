// almost the same as main-panel but with slight differences

import dynamic from "next/dynamic";
import styled from "styled-components";

import Header from "@/components/header/desktop";
import MobileHeader from "@/components/header/mobile";

import CoinInfo from "@/components/main-panel/coin-info";
import Graph from "@/components/main-panel/graph";
import StatsDetails from "@/components/main-panel/stats-details";
import Overview from "@/components/main-panel/overview";
import Rate from "@/components/main-panel/rate";
import Functions from "@/components/main-panel/functions";
import ContractSection from "@/components/main-panel/sections/contract";
import DeployerSection from "@/components/main-panel/sections/deployer";
import SimulationSection from "@/components/main-panel/sections/simulation";
import Transactions from "@/components/main-panel/transactions";

const VectorBg = dynamic(() => import("@/components/ui/visuals/vector-bg"), {
  ssr: false,
});

// TODO: back button
// + extended stats

const MainPanel = () => (
  <MainPanelContainer className="overflow-hidden md:overflow-scroll flex flex-col w-full">
    <MobileHeader />
    <Header withBackButton />
    <CoinInfo />
    <Graph />
    <StatsDetails extended />
    <div
      className="flex flex-col md:flex-row justify-between"
      style={{ marginBottom: 46 }}
    >
      <div
        className="flex flex-col w-full md:w-3/5"
        style={{ marginRight: 20 }}
      >
        <Overview />
        <Rate />
      </div>
      <div className="flex flex-col w-full md:w-2/5">
        <Functions />
      </div>
    </div>
    <div
      className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-36px md:space-y-0"
      style={{ marginBottom: 26 }}
    >
      <ContractSection />
      <DeployerSection />
      <SimulationSection />
    </div>
    <Transactions />
    <VectorBg />
  </MainPanelContainer>
);

const MainPanelContainer = styled.div`
  padding: 24px 46px 76px 46px;
  background: ${(props) => props.theme.mainBg};
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export default MainPanel;
