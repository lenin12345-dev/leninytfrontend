import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import  Divider  from '@material-ui/core/Divider';
import { useDispatch, useSelector } from "react-redux";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    topicListItemIcon: {
        '&.MuiListItemIcon-root': {
            minWidth: 44,
        },
    },
}));
export default function Sidebar({style}) {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const classes = useStyles();

    // Early Return pattern
    if (!isMenuOpen) return null;
  const menuList = 
     [
        {
            name:'Home',
            icon: <HomeIcon/>,
         
        },
        {
            name:'Shorts',
            icon: <PlayCircleFilledWhiteIcon />,
         
        },
        {
            name:'Subscriptions',
            icon: <SubscriptionsIcon />,
         
        },
   
        {
            type: 'divider'
        },
        {
            name:'Library',
            icon: <LibraryMusicIcon />,
         
        },
        {
            name:'History',
            icon: <HistoryIcon />,
         
        },
        {
            name:'Your Videos',
            icon: <VideoLibraryIcon />,
         
        },
        {
            name:'Watch Later',
            icon: <VideoLibraryIcon />,
         
        },
        {
            name:'Liked Videos',
            icon: <FeaturedVideoIcon />,
         
        },
        {
            name:'Shopping',
            icon: <FeaturedVideoIcon />,
         
        },
        {
            name:'Music',
            icon: <LibraryMusicIcon />,
         
        },
        {
            name:'News',
            icon: <SubscriptionsIcon />,
         
        },
        {
            name:'Gaming',
            icon: <FeaturedVideoIcon />,
         
        },
        {
            name:'Fashion & Beauty',
            icon: <HomeIcon />,
         
        },
        {
            name:'Show More',
            icon: <ExpandMoreIcon />,
         
        },
    
    ];

    return (
      <>
      <div style={{marginRight:94,...style}}>
      
             <List>
        {menuList.map((each, index) => {
            if(!each) return;
                      
            if(each.type && each.type === 'divider') return <Box my={2}> <Divider/>  </Box>;
         return <ListItem button key={index}>
            <ListItemIcon className={classes.topicListItemIcon}>{each.icon}</ListItemIcon>
            <ListItemText style={{ fontSize:10 }} primary={
                <Typography variant='subtitle2' style={{color:'black'}}>
               { each.name}
                </Typography>
                }
                 />
          </ListItem>

        }
          
        )}
      </List>
      </div>
      
      </>
    )
  }