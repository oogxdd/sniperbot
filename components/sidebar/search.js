import styled from "styled-components";

const Search = () => (
  <SearchContainer className="flex items-center mb-47px">
    <SearchIcon />
    <SearchInput placeholder="Search" />
  </SearchContainer>
);

const SearchContainer = styled.div``;

const SearchIcon = styled.img.attrs({
  className: "inline-block",
  src: "icons/search-sm.svg",
})`
  margin-right: 10px;
`;

const SearchInput = styled.input.attrs({ className: "" })`
  background: transparent;
`;

export default Search;
