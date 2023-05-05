import React, { useState, useEffect } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "30px",
  },
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0.2px",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderRadius: "25px 0 0 25px",
    },
    "& .MuiInputLabel-formControl": {
      top: -7,
    },
    "& .MuiAutocomplete-fullWidth": {
      width: "80%",
    },
  },
  appBar: {
    "& .MuiPaper-elevation4": {
      boxShadow: "none",
    },
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoAlign: {
    display: "flex",
    alignItems: "baseline",
  },
  search: {
    position: "relative",
    display: "flex",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    flexGrow: 0.4,
    marginBottom: 5,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    border: `1px solid gray`,
    borderRadius: "25px 0px 0px 25px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "32px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "50px",
    },
  },
  iconButtonSearch: {
    border: `1px solid gray`,
    borderRadius: "0px 25px 25px 0px",
    marginLeft: 0,
    backgroundColor: "#F5F5F5",
    height: 41,
    marginTop: 16,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  autocompleteInputRoot: {
    borderRadius: "5px !important",
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      padding: 2,
    },
  },
}));

function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = React.useState(null);
  const searchCache = useSelector((store) => store.search);
  const router = useRouter();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_API + `&q=${searchQuery && searchQuery.trim()}`
    );
    const json = await data.json();
    setSuggestions(json.items || []);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.logoAlign}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleMenuHandler()}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/youtube">
              <a>
                <img
                  height={25}
                  alt="youtube-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                />
              </a>
            </Link>
          </div>
          <div className={classes.search}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              options={suggestions}
              style={{ width: "80%" }}
              classes={{ inputRoot: classes.autocompleteInputRoot }}
              value={value}
              onChange={(event, newValue) => {
                router.push({
                  pathname: "youtube/[videoId]",
                  query: { videoId: newValue?.id?.videoId },
                });
              }}
              getOptionLabel={(option) => {
                if (typeof option === "string") {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option?.snippet?.title;
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  label="Search"
                  margin="normal"
                  variant="outlined"
                  className={classes.root}
                  InputLabelProps={{
                    style: { fontSize: 14 },
                  }}
                />
              )}
            />
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              className={classes.iconButtonSearch}
            >
              <SearchIcon />
            </IconButton>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
export default dynamic(() => Promise.resolve(PrimarySearchAppBar), {
  ssr: false,
});
