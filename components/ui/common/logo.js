import styled from "styled-components";

export const Logo = styled.img.attrs((props) => ({
  className: "mb-4 mb-0 md:mb-38px",
  src: props.theme.value === "dark" ? "/Logo-dark.svg" : "/Logo.svg",
  alt: "SniperBot",
}))`
  height: 34px;
`;

export default Logo;
