import styled from "styled-components";

export const Button = ({
  primary = false,
  rounded = false,
  children,
  style = {},
  ...props
}) => {
  console.log(rounded);
  console.log(props);
  if (rounded) {
    return (
      <ButtonRounded style={style} primary={primary} {...props}>
        {children}
      </ButtonRounded>
    );
  }

  return (
    <ButtonStyled style={style} primary={primary} {...props}>
      {children}
    </ButtonStyled>
  );
};

const ButtonRounded = styled.button.attrs({
  className: "flex items-center cursor-pointer",
})`
  padding: 10px 18px 11px;
  border-radius: 99px;
  width: max-content;
  z-index: 1;

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

  ${(props) => {
    if (props.primary) {
      return `
        background: #1E56C3;
        color: #fff;
      `;
    } else if (props.subtle) {
      if (props.theme.value === "dark") {
        return `
          color: #959598;
      `;
      }
      if (props.theme.value === "light") {
        return `
          border: 1px solid rgba(0, 0, 0, 0.15);
          background: #FFF;
          color: #5B636C;
      `;
      }
    } else {
      // if (props.theme.value === "dark") {
      //   return `
      // `;
      // }
      // if (props.theme.value === "light") {
      //   return `
      // `;
      // }
    }
  }}

  :hover {
    background: ${(props) => props.theme.hoverBtnBg};
  }

  :active {
    background: ${(props) => props.theme.focusBtnBg};
  }

  ${(props) =>
    props.blue &&
    `
    background: #1E56C3;
    color: white;

    :hover {
      background: #326cde;
    }

    :focus {
      background: #1649ab;
    }
  `}
`;

const ButtonStyled = styled.button.attrs({
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
    if (props.primary) {
      if (props.theme.value === "dark") {
        return `
          background: #017FB2;
          color: #FFF;

          :hover {
            background: ${(props) => props.theme.tealHover} !important;
          }

          :active {
            background: ${(props) => props.theme.tealFocus} !important;
          }
      `;
      }
      if (props.theme.value === "light") {
        return `
          background: ${props.theme.primary};
          color: #FFF;

          :hover {
            background: ${(props) => props.theme.tealHover} !important;
          }

          :active {
            background: ${(props) => props.theme.tealFocus} !important;
          }
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

  :hover {
    background: ${(props) => props.theme.hoverBtnBg};
  }

  :active {
    background: ${(props) => props.theme.focusBtnBg};
  }

  ${(props) =>
    props.blue &&
    `
    background: #1E56C3;
    color: white;

    :hover {
      background: #326cde;
    }

    :focus {
      background: #1649ab;
    }
  `}
`;

export default Button;
