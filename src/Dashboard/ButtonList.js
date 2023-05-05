import React from "react";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "nowrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    marginTop: 75,
  },
  chip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.5),
    backgroundColor: "#F0F0F0",
    fontSize: 14,
  },
  chipDefault: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.5),
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontSize: 14,
  },
  slideTop: {
    display: "flex",
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
  slide: {
    width: "100%",
  },
  rootChip: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "nowrap",
    listStyle: "none",
    boxShadow: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    maxWidth: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "638px",
      minWidth: "638px",
    },
  },
}));

const ButtonList = () => {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const chipList = [
    {
      name: "All",
      id: 1,
      default: true,
    },
    {
      name: "Gaming",
      id: 2,
      default: false,
    },
    {
      name: "Songs",
      id: 3,
      default: false,
    },
    {
      name: "Live",
      id: 4,
      default: false,
    },
    {
      name: "Soccer",
      id: 5,
      default: false,
    },
    {
      name: "Cricket",
      id: 6,
      default: false,
    },
    {
      name: "Cooking",
      id: 7,
      default: false,
    },
    {
      name: "Apple",
      id: 8,
      default: false,
    },
    {
      name: "Music",
      id: 9,
      default: false,
    },
    {
      name: "Motivation",
      id: 10,
      default: false,
    },
    {
      name: "Comedy",
      id: 11,
      default: false,
    },
    {
      name: "Bollywood Music",
      id: 12,
      default: false,
    },
    {
      name: "Chillout Music",
      id: 13,
      default: false,
    },
    {
      name: "Indian Premier League",
      id: 14,
      default: false,
    },
    {
      name: "Indian League",
      id: 15,
      default: false,
    },
  ];
  const handlePrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? chipList.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === chipList.length - 4 ? 0 : prevIndex + 1
    );
  };
  const numCategories = isMobile ? 8 : 14;

  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      className={classes.root}
    >
      {isMobile && (
        <IconButton onClick={handlePrevious}>
          <ChevronLeftIcon />
        </IconButton>
      )}

      <Paper component="ul" className={classes.rootChip}>
        {chipList.slice(index, index + numCategories).map((category) => (
          <li key={category.key}>
            <Chip
              key={category}
              className={classes.chip}
              label={category.name}
            />
          </li>
        ))}
      </Paper>
      {isMobile && (
        <IconButton onClick={handleNext}>
          <ChevronRightIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ButtonList;
