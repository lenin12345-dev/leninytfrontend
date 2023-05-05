import Sidebar from "../../component/sidebar";
import MainContainer from "../../src/Dashboard/MainContainer";

import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import Hidden from "@material-ui/core/Hidden";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    width: "calc(100vw - 20px)",
  },
  sideBar: {
    position: "fixed",
    top: 0,
    left: 0,
    flexShrink: 0,
  },
});
function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.pageContainer}>
        <Hidden smDown>
          <Sidebar className={classes.sideBar} />
        </Hidden>
        <MainContainer />
      </Box>
    </>
  );
}
export default dynamic(() => Promise.resolve(Dashboard), {
  ssr: false,
});
