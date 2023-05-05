import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShopIcon from "@material-ui/icons/Shop";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import FaceIcon from "@material-ui/icons/Face";
import HearingIcon from "@material-ui/icons/Hearing";
import SettingsIcon from "@material-ui/icons/Settings";
import FeedbackIcon from "@material-ui/icons/Feedback";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import { useRouter } from 'next/router';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  topicListItemIcon: {
    "&.MuiListItemIcon-root": {
      minWidth: 44,
    },
  },
  listItem:{
    '&:hover': {
        backgroundColor: '#F0F0F0',
    borderRadius:5,

      },
      paddingRight:30
  },

  menuListActive:{
    backgroundColor:'#F0F0F0',
    borderRadius:5,
    '& .menuName':{
        fontWeight:'bold',
    }
  },
  listItemText:{
    fontSize: 14,
    color:"#000000" 
  }
}));
export default function Sidebar({ style }) {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const classes = useStyles();
  const Router = useRouter();
  const {pathname= ''} = Router;
  if (!isMenuOpen) return null;

  const menuList = [
    {
      name: "Home",
      icon: <HomeIcon />,
      onActiveLink:'/youtube'
    },
    {
      name: "Shorts",
      icon: <PlayCircleFilledWhiteIcon />,
      onActiveLink:'/shorts'
    },
    {
      name: "Subscriptions",
      icon: <SubscriptionsIcon />,
      onActiveLink:'/subscription'

    },

    {
      type: "divider",
    },
    {
      name: "Library",
      icon: <LibraryMusicIcon />,
      onActiveLink:'/library'

    },
    {
      name: "History",
      icon: <HistoryIcon />,
    },
    {
      name: "Your Videos",
      icon: <VideoLibraryIcon />,
    },
    {
      name: "Watch Later",
      icon: <FeaturedVideoIcon />,
    },
    {
      name: "Liked Videos",
      icon: <ThumbUpAltIcon />,
    },
    {
      name: "Shopping",
      icon: <ShopIcon />,
    },
    {
      name: "Music",
      icon: <LibraryMusicIcon />,
    },
    {
      name: "News",
      icon: <AnnouncementIcon />,
    },
    {
      name: "Gaming",
      icon: <SportsEsportsIcon />,
    },
    {
      name: "Fashion & Beauty",
      icon: <FaceIcon />,
    },
    {
      name: "Podcasts",
      icon: <HearingIcon />,
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
    },
    {
      name: "Help",
      icon: <LiveHelpIcon />,
    },
    {
      name: "Send Feedback",
      icon: <FeedbackIcon />,
    },
    {
      name: "Show More",
      icon: <ExpandMoreIcon />,
    },
  ];

  return (
    <>
    
      <div style={{ margin:5,position:'fixed',marginTop:72, ...style }}>
        <List>
          {menuList.map((each, index) => {
            if (!each) return;

            if (each.type && each.type === "divider")
              return (
                <Box my={2}>
                  {" "}
                  <Divider />{" "}
                </Box>
              );
            return (
              <ListItem 
y              className={clsx({
                [classes.menuListActive]:each.onActiveLink == pathname, // active menu
                [classes.listItem]: true
            })}
              button 
              key={index}>
                <ListItemIcon className={classes.topicListItemIcon}>
                  {each.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography 
                     className={clsx({
                        [classes.listItemText]: true,
                        'menuName': true
                    })}
                    variant="subtitle2" >
                      {each.name}
                    </Typography>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </>
  );
}
