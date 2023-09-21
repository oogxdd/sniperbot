import styled from "styled-components";
import { useUI } from "@/hooks";
import { Button } from "@/components/ui";

import DislikeIconSource from "@/assets/icons/face-frown.svg";
import DisabledIconSource from "@/assets/icons/minus-circle.svg";

const Actions = () => {
  const { showPopup, setShowPopup } = useUI();

  return (
    <ActionsContainer className="flex flex-col md:flex-row items-start md:items-center space-y-2.5 md:space-y-0 w-full justify-between">
      <div className="flex items-center space-x-5px md:space-x-2.5">
        <Button primary onClick={() => setShowPopup(!showPopup)}>
          Subscribe / buy
        </Button>
        <Button>Watch</Button>
      </div>
      <div className="flex items-center space-x-5px md:space-x-2.5">
        <Button type="like">
          <LikeIcon />
          <span />I like it
        </Button>
        <Button>
          <DislikeIcon />
          Looks bad
        </Button>
        <Button>
          <DisabledIcon />
          Disabled
        </Button>
      </div>
    </ActionsContainer>
  );
};

const ActionsContainer = styled.div.attrs({ className: "" })`
  margin-bottom: 46px;

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

const LikeIcon = styled.img.attrs({
  className: "mr-1.5",
  src: "icons/heart-rounded.svg",
})``;
const DislikeIcon = styled(DislikeIconSource).attrs({
  className: "mr-1.5",
})`
  stroke: ${(props) => (props.theme.value === "dark" ? "#fff" : "#000")};
`;
const DisabledIcon = styled(DisabledIconSource).attrs({
  className: "mr-1.5",
})`
  stroke: ${(props) => (props.theme.value === "dark" ? "#fff" : "#000")};
`;

export default Actions;
