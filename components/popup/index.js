import styled from "styled-components";
import { Title, Subheading, Input, Button, Hint, Logo } from "@/components/ui";
import { useTheme } from "@/hooks";

export default function Popup() {
  const { toggleTheme, showPopup, setShowPopup } = useTheme();

  return (
    <PopupOverlay>
      <PopupContainer>
        <Form className="flex flex-col">
          <Title>Buy</Title>
          <div className="flex flex-col space-y-26px">
            <div className="flex space-x-1.5">
              <Button primary>Rapid</Button>
              <Button>Standart</Button>
            </div>
            <div className="flex space-x-9px">
              <Input label="Amount" placeholder="50,000" value="" />
              <Input label="Bribe" placeholder="0.006" value="" />
            </div>
            <div className="flex space-x-9px">
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
            <Button>Buy now</Button>
          </div>
        </Form>
        <Image />
        <CloseButton onClick={() => setShowPopup(!showPopup)}>
          Close
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
  background: #f7f9fa;
  position: relative;
`;

const Form = styled.div.attrs({
  className: "",
})`
  padding: 40px 26px 26px 26px;
`;

const PopupOverlay = styled.div.attrs({
  className: "fixed top-0 left-0 flex items-center justify-center",
})`
  background: rgba(10, 22, 33, 0.9);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
`;

const Image = styled.img.attrs({ src: "/images/popup-image.png" })`
  width: 300px;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 40px;
  right: 26px;
  border-radius: 99px;
`;
