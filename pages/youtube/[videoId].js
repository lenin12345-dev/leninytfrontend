import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { closeMenu, toggleMenu } from "../../utils/appSlice";
import CommentsContainer from "../../src/Dashboard/CommentsContainer";
import LiveChat from "../../src/Dashboard/LiveChat";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import dynamic from "next/dynamic";
import Sidebar from "../../component/sidebar";

const useStyles = makeStyles((theme) => ({
  watchPageBelow: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  watchPage: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 30,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginTop: 86,
    },
  },
  liveChat: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },
  watchPageFrame: {
    // width: "1200px",
    // height: "600px",
    // width: "100%",
    // height: "auto",
    aspectRatio: "16/9", 
    width: "1200px",  // Limits the maximum width
    height: "675px", 
    // [theme.breakpoints.between("lg", "xl")]: {
    //   width: "1200px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   width: "1200px",
    // },
    [theme.breakpoints.down("md")]: {
      width: "650px",
      height: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "680px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "400px",
      height: "300px",
    },
  },
}));

const WatchPage = () => {
  const router = useRouter();
  const classes = useStyles();

  const { videoId } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    return () => {
      dispatch(toggleMenu({ isMenuOpen: false }));
    };
  }, []);
  return (
    <Box className={classes.watchPage}>
      <Box className={classes.watchPageBelow}>
        <Sidebar
          style={{
            position: "absolute",
            top: -16,
            left: -29,
            backgroundColor: "white",
          }}
        />

        <Box>
          <iframe
            className={classes.watchPageFrame}
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Box>
        <Box className={classes.liveChat}>
          <LiveChat videoId={videoId} />
        </Box>
      </Box>
      <CommentsContainer  />
    </Box>
  );
};

export default dynamic(() => Promise.resolve(WatchPage), {
  ssr: false,
});
