// links to pages here
// + hint how to toggle dark/theme
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <div className="flex flex-col m-16 space-y-8 text-lg">
      <LinkStyled href="/home">home</LinkStyled>
      <LinkStyled href="/details">details</LinkStyled>
      <LinkStyled href="/login">login</LinkStyled>
      <LinkStyled href="/signup">signup</LinkStyled>
    </div>
  );
}

const LinkStyled = styled(Link)`
  :hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;
