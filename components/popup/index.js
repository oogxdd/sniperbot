import styled from "styled-components";
import { Title, Subheading, Input, Button, Hint, Logo } from "@/components/ui";
import { useUI } from "@/hooks";

const BuyNowButton = styled(Button).attrs({ className: "" })`
  background: ${(props) =>
    props.theme.value === "dark" ? "#1E56C3" : "#1E56C3"};
  color: white;
  box-shadow: none;
  border: none;
`;

export default function Popup() {
  const { showPopup, setShowPopup } = useUI();

  return (
    <PopupOverlay>
      <PopupContainer>
        <Form className="flex flex-col w-full">
          <Title>Buy</Title>
          <div className="flex flex-col w-full space-y-5 md:space-y-26px">
            <div className="flex space-x-1.5">
              <Button rounded primary>
                Rapid
              </Button>
              <Button subtle rounded>
                Standart
              </Button>
            </div>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-9px space-y-5 md:space-y-0">
              <Input label="Amount" placeholder="50,000" value="" />
              <Input label="Bribe" placeholder="0.006" value="" />
            </div>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-9px space-y-5 md:space-y-0">
              <Input label="Gas price" placeholder="0.15" value="" />
              <Input label="Gas limit" placeholder="0.1" value="" />
            </div>
            <div className="flex space-x-9px">
              <Input
                label="Auto sell on Pull Liquidity"
                placeholder="53%"
                value=""
              />
            </div>
            <BuyNowButton>Buy now</BuyNowButton>
          </div>
        </Form>
        <Image />
        <CloseButton rounded onClick={() => setShowPopup(!showPopup)}>
          <CloseIcon />
          <span>Close</span>
        </CloseButton>
      </PopupContainer>
    </PopupOverlay>
  );
}

const PopupContainer = styled.div.attrs({
  className: "flex justify-between",
})`
  width: 849px;
  border-radius: 16px;
  background: ${(props) =>
    props.theme.value === "dark" ? "#161619;" : "#f7f9fa"};
  position: relative;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

const Form = styled.div.attrs({
  className: "",
})`
  padding: 40px 26px 26px 26px;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const PopupOverlay = styled.div.attrs({
  className: "fixed top-0 left-0 flex items-center justify-center",
})`
  background: ${(props) =>
    props.theme.value === "dark"
      ? "rgba(65, 73, 81, 0.90)"
      : "rgba(10, 22, 33, 0.9)"};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
`;

const Image = styled.img.attrs({
  src: "/images/popup-image.png",
  className: "hidden md:block",
})`
  width: 300px;
`;

const CloseIcon = styled.img.attrs({
  alt: "",
  src: "/icons/cancel 1.svg",
})`
  margin-right: 8px;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 40px;
  right: 26px;
  border-radius: 99px;
  box-shadow: none;
  border: none !important;
  color: ${(props) => (props.theme.value === "dark" ? "#fff" : "#112232")};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.21px;

  :hover {
    opacity: 0.95;
  }

  @media (max-width: 768px) {
    top: 16px;
    right: 20px;
  }
`;
