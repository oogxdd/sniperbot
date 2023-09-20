import styled from "styled-components";

const ButtonComponent = ({
  primary = false,
  rounded = false,
  children,
  style = {},
  ...props
}) => {
  if (rounded) {
    return (
      <ButtonRounded style={style} {...props}>
        {children}
      </ButtonRounded>
    );
  }

  return (
    <Button primary={primary} {...props}>
      {children}
    </Button>
  );
};

const ButtonRounded = styled.button.attrs({
  className: "flex items-center cursor-pointer",
})`
  padding: 10px 18px 11px;
  border-radius: 99px;
  ${(props) =>
    props.theme.value === "dark"
      ? `
background: #45464C;
color: #FFF;
  `
      : `

  background: ${props.theme.buttonBg};
  color: ${props.theme.textPrimary};
  border: 1px solid #d8dbdf;
  `}
  width: max-content;
  z-index: 1;
`;
// margin-left: 10px;
// width: min-content;

export const Button = styled.button.attrs({
  className: "flex items-center justify-center",
})`
  font-family: Sequel Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 415;
  line-height: normal;
  letter-spacing: -0.15px;
  padding: 13px 16px;
  border-radius: 10px;
  z-index: 1;

  ${(props) => {
    console.log(props);
    if (props.primary) {
      if (props.theme.value === "dark") {
        return `
          background: #017FB2;
          color: #FFF;
      `;
      }
      if (props.theme.value === "light") {
        return `
          background: ${props.theme.primary};
          color: #FFF;
      `;
      }
    } else {
      if (props.theme.value === "dark") {
        return `
          color: #fff;
          border-radius: 10px;
          border: 1px solid #45464C;
          background: #25262C;
      `;
      }
      if (props.theme.value === "light") {
        return `
          border-radius: 10px;
          border: 1px solid ${props.theme.buttonBorder};
          background: ${props.theme.buttonBg};
          box-shadow: 0px 1px 3px 0px rgba(236, 236, 236, 0.6);
          color: ${props.theme.textPrimary};
      `;
      }
    }
  }}
`;

export default ButtonComponent;
