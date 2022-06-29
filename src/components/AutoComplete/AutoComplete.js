import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "../../utils";
import { FetchSearchMoviesList } from "../../features/Home/api/app";
import TransitionsModal from "./Modal";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  cursor: "pointer",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function AutocompleteComponent() {
  const [searchString, setSearchString] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);

  async function fetchMoviesHandler() {
    if (searchString) {
      const result = await FetchSearchMoviesList(searchString);
      setSearchData(result?.data?.results);
    }
  }

  React.useEffect(() => {
    fetchMoviesHandler();
  }, [searchString]);

  function searchHandler(el) {
    setSearchString(el.target.value);
  }

  return (
    <>
      <div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            type="text"
            placeholder="Search Movies/Series"
            inputProps={{ "aria-label": "search" }}
            onChange={(el) => debounce(() => searchHandler(el), 1000)}
          />
        </Search>
      </div>
      {searchData.length > 0 && (
        <TransitionsModal data={searchData} redirect="/overview/" />
      )}
    </>
  );
}
