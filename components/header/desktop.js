import styled from "styled-components";
import ProfileActions from "./profile-actions";
import ArrowBack from "./arrow-back";

const Header = ({ withBackButton = false }) => (
  <div
    className="hidden md:flex items-center justify-between w-full"
    style={{ marginBottom: 58 }}
  >
    {withBackButton ? <ArrowBack /> : <HeaderLinks />}
    <ProfileActions />
  </div>
);

const HeaderLinks = () => (
  <div className="flex items-center">
    <HeaderLink dropdown>Investments</HeaderLink>
    <HeaderLink>Resources</HeaderLink>
    <HeaderLink>News</HeaderLink>
    <HeaderLink>Portfolio</HeaderLink>
  </div>
);

const HeaderLink = ({ children, dropdown, ...props }) => (
  <HeaderLinkStyled {...props}>
    {children}
    {dropdown && (
      <DropdownIconWrapper>
        <DropdownIcon />
      </DropdownIconWrapper>
    )}
  </HeaderLinkStyled>
);

const HeaderLinkStyled = styled.a.attrs({ className: "cursor-pointer" })`
  color: ${(props) => props.theme.headerLinkColor};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 28px;
  :hover {
    opacity: 0.8;
  }
`;
const DropdownIconWrapper = styled.div.attrs({
  className: "inline-flex items-center justify-center",
})`
  margin-left: 6px;
  background: ${(props) =>
    props.theme.value === "light" ? "rgba(229, 233, 240, 1)" : "#25262C"};
  width: 16px;
  height: 16px;
  border-radius: 100%;
`;
const DropdownIcon = styled.img.attrs((props) => ({
  className: "",
  src:
    props.theme.value === "dark"
      ? "icons/down-chevron-dark.svg"
      : "icons/down-chevron-1.svg",
}))``;

export default Header;
