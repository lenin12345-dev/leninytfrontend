import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from "react-redux";
import { hideMoreText } from '../../utils/helper';
const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 620,
    width:350,
    margin:10,
    padding:2,
    height:'90%',
    boxShadow:'none',
    [theme.breakpoints.up('lg')]: {
      width:350,
  },
  [theme.breakpoints.down('lg')]: {
    width:320,
},
  [theme.breakpoints.down('md')]: {
    width:320,
},
  [theme.breakpoints.down('sm')]: {
    width:320,
},
  [theme.breakpoints.down('xs')]: {
    width:600,
},
  },
  modifyRoot: {
    maxWidth: 450,
    width:280,
    margin:10,
    padding:2,
    height:'90%',
    boxShadow:'none'


  },
  media: {
    height: 195,
    borderRadius:5,
    width:'100%',
    [theme.breakpoints.down('xs')]: {
      height:330,
  },
  },
}));


export default function MediaCard({info}) {
  const classes = useStyles();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails,publishedAt } = snippet;
  function getElapsedTime(publishedDate) {
    const ONE_MINUTE = 60 * 1000; // milliseconds
    const ONE_HOUR = 60 * ONE_MINUTE;
    const ONE_DAY = 24 * ONE_HOUR;
  
    const now = new Date();
    const published = new Date(publishedDate);
    const elapsedTime = now - published;
  
    if (elapsedTime < ONE_MINUTE) {
      return 'just now';
    } else if (elapsedTime < ONE_HOUR) {
      const minutes = Math.floor(elapsedTime / ONE_MINUTE);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (elapsedTime < ONE_DAY) {
      const hours = Math.floor(elapsedTime / ONE_HOUR);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(elapsedTime / ONE_DAY);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  }
  

  return (
    <Card className={isMenuOpen?classes.root:classes.modifyRoot}>
        <CardMedia
          className={classes.media}
          image={thumbnails.medium.url}
          title= {title}
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="h3" fontWeight='bold'>
            {hideMoreText(title, false, 35)}

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {channelTitle}
          </Typography>
          <Typography style={{ display:'flex', alignItems:'center'}} variant="body2" color="textSecondary" component="p">
           {statistics.viewCount} views <div style={{ fontWeight:'bold',fontSize:15,marginLeft:2,marginRight:2,marginBottom:4 }}>.</div> {getElapsedTime(publishedAt)}
          </Typography>
        </CardContent>
    </Card>
  );
}