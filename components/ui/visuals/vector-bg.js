import styled from "styled-components";
import { useTheme } from "@/hooks";

const VectorBgSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 105px;
  background: rgba(124, 243, 143, 0.68), rgba(255, 255, 255, 0);
  z-index: 0;
  pointer-events: none;
`;

const VectorBgLightImage = styled.img.attrs({
  src: "/images/vector-bg-light.svg",
})`
  // top: -129px;
  top: 0;
  right: 105px;
  // width: 388px;
  // height: 401px;
  position: absolute;
  pointer-events: none;
`;

export const VectorBg = () => {
  const { theme } = useTheme();

  if (theme === "light") {
    return <VectorBgLightImage className="hidden md:block" />;
  }

  return (
    <VectorBgSvg
      className="hidden md:block"
      xmlns="http://www.w3.org/2000/svg"
      width="467"
      height="306"
      viewBox="0 0 467 306"
      fill="none"
    >
      <path
        d="M51 114.666L439 -14.4286L255.211 157.429L426.747 272L151.063 -129"
        stroke="url(#paint0_linear_82_4385)"
        stroke-opacity="0.4"
        stroke-width="80"
        stroke-linecap="square"
      />
      <defs>
        <linearGradient
          id="paint0_linear_82_4385"
          x1="187.821"
          y1="-151.505"
          x2="245.211"
          y2="392.687"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7CF38F" stop-opacity="0.68" />
          <stop offset="1" stop-color="#161619" stop-opacity="0" />
        </linearGradient>
      </defs>
    </VectorBgSvg>
  );
};

export default VectorBg;
