import styled from "styled-components";
import { useTheme } from "@/hooks";

export const VectorRate = () => {
  const { theme } = useTheme();

  if (theme === "light") {
    return <VectorRateLightImage />;
  }

  if (window.innerWidth <= 768) {
    return (
      <VectorRateSvg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="123"
        viewBox="0 0 120 123"
        fill="none"
      >
        <path
          d="M26 34.5915L203 -24L119.158 54L197.411 106L71.6474 -76"
          stroke="url(#paint0_linear_82_4776)"
          stroke-opacity="0.1"
          stroke-width="40"
          stroke-linecap="square"
        />
        <defs>
          <linearGradient
            id="paint0_linear_82_4776"
            x1="88.4158"
            y1="-86.2143"
            x2="114.334"
            y2="160.803"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#017FB2" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </VectorRateSvg>
    );
  }
  return (
    <VectorRateSvg
      xmlns="http://www.w3.org/2000/svg"
      width="268"
      height="90"
      viewBox="0 0 268 90"
      fill="none"
    >
      <path
        d="M51 37.9497L298 -44.1429L181 65.1429L290.2 138L114.7 -117"
        stroke="url(#paint0_linear_82_4649)"
        stroke-opacity="0.1"
        stroke-width="80"
        stroke-linecap="square"
      />
      <defs>
        <linearGradient
          id="paint0_linear_82_4649"
          x1="138.1"
          y1="-131.311"
          x2="174.557"
          y2="214.754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#017FB2" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </VectorRateSvg>
  );
};

const VectorRateSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0px;
`;

const VectorRateLightImage = styled.img.attrs({
  src:
    window.innerWidth <= 768
      ? "/images/vector-rate-light-mobile.svg"
      : "/images/vector-rate-light.svg",
})`
  top: 0;
  right: 0;
  position: absolute;
`;

export default VectorRate;
