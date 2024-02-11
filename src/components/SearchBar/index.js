import IconArea from "@components/IconArea/IconArea";
import styled from "styled-components";

export const SearchBar = ({
  placeholder,
  onSubmitHandler,
  value,
  setSearchKeyword,
}) => {
  const handleChangeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleDeleteInputClick = () => {
    setSearchKeyword("");
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <StSearchBar className="search-bar">
          <IconArea
            backgroundImageUrl={`/assets/images/icons/SearchIcon.png`}
          />
          <StSearchBarInput
            placeholder={placeholder}
            onChange={handleChangeSearchKeyword}
            value={value}
          />
          {value.length > 0 ? (
            <StCloseIcon type="button" onClick={handleDeleteInputClick} />
          ) : null}
        </StSearchBar>
      </form>
    </>
  );
};
const StSearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 15px 16px;
  border-radius: 10px;
`;

const StSearchBarInput = styled.input`
  font-size: 1.6rem;
  font-weight: 400;
  width: 100%;
`;

const StCloseIcon = styled.button`
  width: 20px;
  height: 20px;
  background: url("/assets/images/icons/closeIconGrey.svg") no-repeat center;
  background-size: contain;
`;
