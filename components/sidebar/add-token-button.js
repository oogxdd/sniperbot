import styled from "styled-components";

const AddTokenButton = () => (
  <SidebarButton>
    <span>+ Add Token</span>
  </SidebarButton>
);

const SidebarButton = styled.button.attrs({ className: "cursor-pointer" })`
  border-radius: 10px;

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.15px;

  padding: 11px 0px;

  ${(props) =>
    props.theme.value === "dark"
      ? `
border-radius: 10px;
border: 1px solid #45464C;
background: #19191D;
    color: rgba(1, 127, 178, 1);
  `
      : `
  border: 1px solid #d3dce7;
  background: #fff;
  box-shadow: 0px 1px 3px 0px rgba(236, 236, 236, 0.6);
  color: #017fb2;

  `}

  :hover {
    background: ${(props) => props.theme.hoverBtnBg};
  }

  :focus {
    background: ${(props) => props.theme.focusBtnBg};
  }
`;

export default AddTokenButton;
