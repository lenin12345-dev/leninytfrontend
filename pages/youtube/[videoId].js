import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { closeMenu,toggleMenu } from "../../utils/appSlice";
import CommentsContainer from "../../src/Dashboard/CommentsContainer";
import LiveChat from "../../src/Dashboard/LiveChat";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";
import dynamic from 'next/dynamic';
import Sidebar from '../../component/sidebar'
import Dialog from '@material-ui/core/Dialog';


const useStyles = makeStyles({
  watchPageBelow: {
    display: 'flex',
    position:'relative',
    marginLeft:30

  },
  watchPage:{
    marginTop:15,
    position:'relative',

  },
  liveChat:{
    width:'80%'
  },

});

const WatchPage = () => {

  const router = useRouter();
  const classes = useStyles();

  const { videoId } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    return()=>{
    dispatch(toggleMenu({isMenuOpen:false}));

    }
  }, []);
  return (
    <Box className= {classes.watchPage} >
      <Box className={classes.watchPageBelow}>

      <Sidebar style={{position :'absolute',  top:-16,left:-29, backgroundColor:'white'}}/>

        <Box className="">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Box>
        <Box className= {classes.liveChat}>
          <LiveChat />
        </Box>
      </Box>
      <CommentsContainer />
    </Box>
  );
};

export default dynamic(() => Promise.resolve(WatchPage), {
  ssr: false
});
