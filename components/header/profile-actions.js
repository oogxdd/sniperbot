import styled from "styled-components";
import { Button } from "@/components/ui";
import TaggleWalletsIconSource from "@/assets/icons/wallet-01.svg";

const ProfileActions = () => (
  <div className="flex items-center space-x-2.5">
    <Button rounded>
      <TaggleWalletsIcon />
      Taggle wallets
    </Button>
    <Button rounded>Log Out</Button>
  </div>
);

const TaggleWalletsIcon = styled(TaggleWalletsIconSource).attrs({
  className: "mr-2",
})`
  stroke: ${(props) => (props.theme.value === "dark" ? "#fff" : "#292F39")};
`;

export default ProfileActions;
