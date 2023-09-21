import { useUI } from "@/hooks";
import styled from "styled-components";

import MenuCloseSource from "@/assets/icons/menu-close.svg";

import Logo from "@/components/ui/common/logo";
import Search from "./search";
import Tokens from "./tokens";
import AddTokenButton from "./add-token-button";

const Sidebar = () => {
  const { showMobileMenu, setShowMobileMenu } = useUI();

  return (
    <>
      <SidebarContainer>
        <div className="flex flex-col items-start">
          <Logo />
          <Search />
          <Tokens />
        </div>
        <AddTokenButton />
      </SidebarContainer>
      {showMobileMenu && (
        <MobileSidebarContainer>
          <div className="flex flex-col items-start">
            <Search />
            <Tokens />
          </div>
          <AddTokenButton />
          <CloseIcon onClick={() => setShowMobileMenu(false)} />
        </MobileSidebarContainer>
      )}
    </>
  );
};

const CloseIcon = styled(MenuCloseSource).attrs({ className: "fixed" })`
  top: 26px;
  right: 20px;
`;

const MobileSidebarContainer = styled.div.attrs({
  className:
    "flex md:hidden flex-col justify-start md:justify-between pt-6 pb-5 min-h-screen max-h-screen px-5",
})`
  width: 294px;
  min-width: 294px;
  background: ${(props) =>
    props.theme.value === "light"
      ? "#ECF3FD"
      : "linear-gradient(180deg, #1D1D22 45.6%, #161619 100%)"};

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
`;

const SidebarContainer = styled.div.attrs({
  className:
    "hidden md:flex flex-col justify-between pt-6 pb-5 min-h-screen max-h-screen px-5",
})`
  width: 294px;
  min-width: 294px;
  background: ${(props) => props.theme.sidebarBg};

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
`;

export default Sidebar;
