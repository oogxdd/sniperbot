import styled from "styled-components";

const InputStyled = styled.input.attrs({ className: "w-full" })`
  border-radius: 10px;

  ${(props) =>
    props.theme.value === "dark"
      ? `
        border: 1px solid #25262C;
        background: #1D1D22;
        color: #FFF;
      `
      : `
        border: 1px solid #d3dce7;
        background: #fff;
        box-shadow: 0px 1px 3px 0px rgba(236, 236, 236, 0.6);
        color: #0F0822;
    `}

  padding: 13px 14px 14px 14px;
`;
const InputLabel = styled.label.attrs({ className: "" })`
  color: #5b636c;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div.attrs({ className: "" })``;

export const Input = ({ label, ...props }) => (
  <InputWrapper className="flex flex-col w-full">
    {label && <InputLabel>{label}</InputLabel>}
    <InputStyled {...props} />
  </InputWrapper>
);

export default Input;
