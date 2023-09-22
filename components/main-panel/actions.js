import styled from "styled-components";
import { useState } from "react";
import { useUI } from "@/hooks";
import { Button } from "@/components/ui";

import DislikeIconSource from "@/assets/icons/face-frown.svg";
import DisabledIconSource from "@/assets/icons/minus-circle.svg";
import LikeIconSource from "@/assets/icons/heart-rounded.svg";

// #F64C4C
// #F74C4C

const PrimaryButton = styled(Button)`
  :hover {
    background: ${(props) => props.theme.tealHover} !important;
  }

  :active {
    background: ${(props) => props.theme.tealFocus} !important;
  }
`;

const Actions = () => {
  const { showPopup, setShowPopup } = useUI();
  const [isLiked, setLiked] = useState(false);

  return (
    <ActionsContainer className="flex flex-col md:flex-row items-start md:items-center space-y-2.5 md:space-y-0 w-full justify-between">
      <div className="flex items-center space-x-5px md:space-x-2.5">
        <PrimaryButton primary onClick={() => setShowPopup(!showPopup)}>
          Subscribe / buy
        </PrimaryButton>
        <Button>Watch</Button>
      </div>
      <div className="flex items-center space-x-5px md:space-x-2.5">
        <LikeButton liked={isLiked} onClick={() => setLiked(!isLiked)}>
          <LikeIcon liked={isLiked} />
          <span />I like it
        </LikeButton>
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

const LikeButton = styled(Button)`
  ${(props) =>
    props.liked &&
    `
    border: 1px solid #F64C4C !important;
  `}
`;

const ActionsContainer = styled.div.attrs({ className: "" })`
  margin-bottom: 46px;

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

const LikeIcon = styled(LikeIconSource).attrs({
  className: "mr-1.5",
})`
  stroke: ${(props) => (props.theme.value === "dark" ? "#fff" : "#000")};
  ${(props) =>
    props.liked &&
    `
    stroke: #F74C4C;
    fill: #F64C4C;
  `}
`;
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
