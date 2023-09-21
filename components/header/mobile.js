import { useState } from "react";
import { useUI } from "@/hooks";
import styled from "styled-components";
import Logo from "@/components/ui/common/logo";
import MenuIconSource from "@/assets/icons/Icon _Menu_.svg";
import ProfileActions from "./profile-actions";

const MobileHeader = () => {
  const { showMobileMenu, setShowMobileMenu } = useUI();

  return (
    <MobileHeaderContainer
      className="flex md:hidden"
      style={{ marginBottom: 70 }}
    >
      <Logo />
      <MenuIcon onClick={() => setShowMobileMenu(true)} />
      {showMobileMenu && (
        <MobileProfileActionsWrapper>
          <ProfileActions />
        </MobileProfileActionsWrapper>
      )}
    </MobileHeaderContainer>
  );
};

const MobileProfileActionsWrapper = styled.div.attrs({ className: "fixed" })`
  left: 20px;
  bottom: 36px;
  z-index: 22;
`;

const MenuIcon = styled(MenuIconSource)`
  fill: ${(props) => (props.theme.value === "dark" ? "#fff" : "#000")};

  position: fixed;
  top: 30px;
  right: 20px;
`;

const MobileHeaderContainer = styled.div.attrs({
  className: "w-full flex items-center justify-between",
})``;

export default MobileHeader;
