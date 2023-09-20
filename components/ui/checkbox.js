import styled from "styled-components";

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckMarkSVG = styled.svg`
  display: none;
  fill: ${(props) => props.theme.textPrimary};
  border-radius: 2px; // Adding slight border-radius
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid
    ${(props) => (props.theme.value === "dark" ? "#25262C" : "#ECECEC")};
  background: ${(props) => (props.theme.value === "dark" ? "#1D1D22" : "#FFF")};
  box-shadow: ${(props) =>
    props.theme.value === "dark"
      ? "none"
      : "0px 2px 4px 0px rgba(236, 236, 236, 0.80)"};
  margin-right: 8px;
  position: relative;

  input {
    display: none;
  }

  input:checked + & > ${CheckMarkSVG} {
    display: block;
  }
`;

const Label = styled.span`
  color: ${(props) => (props.theme.value === "dark" ? "#959598" : "#5B636C")};
  font-family: Inter;
  font-size: 14px;
`;

const PrivacyLink = styled.a`
  color: ${(props) => (props.theme.value === "dark" ? "#FFF" : "#0F0822")};
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  :visited {
    color: ${(props) => (props.theme.value === "dark" ? "#FFF" : "#0F0822")};
  }
`;

export const Checkbox = () => (
  <CheckboxWrapper>
    <input type="checkbox" id="privacy-policy" style={{ display: "none" }} />
    <StyledCheckbox htmlFor="privacy-policy">
      <CheckMarkSVG
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        // style={{ display: "none" }}
      >
        <path
          d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
          fill="var(--checkmark-color)"
        />
      </CheckMarkSVG>
    </StyledCheckbox>
    <Label>
      I accept Sniperbot.io{" "}
      <PrivacyLink href="#link">Privacy Policy</PrivacyLink>
    </Label>
  </CheckboxWrapper>
);
