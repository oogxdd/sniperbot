import styled from "styled-components";

const ArrowBack = () => (
  <ArrowBackWrapper>
    <ArrowBackIcon />
  </ArrowBackWrapper>
);

const ArrowBackWrapper = styled.div.attrs({
  className: "flex items-center justify-center cursor-pointer",
  src: "",
})`
  background: ${(props) => (props.theme.value === "dark" ? "#45464C" : "#fff")};
  border-radius: 100%;
  ${(props) =>
    props.theme.value === "light" &&
    `
    border: 1px solid #eee;
    filter: drop-shadow(0px 2px 5px rgba(241, 241, 241, 0.8));
    `}

  width: 38px;
  height: 38px;
  flex-shrink: 0;
`;

const ArrowBackIcon = styled.img.attrs((props) => ({
  className: "",
  src:
    props.theme.value === "dark"
      ? "/icons/arrow-back-dark.svg"
      : "/icons/arrow-back-light.svg",
}))``;

export default ArrowBack;
