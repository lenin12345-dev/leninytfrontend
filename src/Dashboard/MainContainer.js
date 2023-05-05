import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  pageSideContainer: {
    marginLeft:275,
    
    [theme.breakpoints.down('sm')]: {
      marginLeft:0
  },
  },
  pageMenuContainer:{
    marginLeft:0
  }
}));
const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const classes = useStyles();


  return (
    <div className= {isMenuOpen?classes.pageSideContainer:classes.pageMenuContainer} >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer; 
