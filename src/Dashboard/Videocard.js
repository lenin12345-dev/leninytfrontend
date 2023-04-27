import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from "react-redux";
import { hideMoreText } from '../../utils/helper';
const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    width:350,
    margin:10,
    padding:2,
    height:'90%'
  },
  modifyRoot: {
    maxWidth: 300,
    width:280,
    margin:10,
    padding:2,
    height:'90%'

  },
  media: {
    height: 195,
    borderRadius:5,
    width:'100%'
  },
});

export default function MediaCard({info}) {
  const classes = useStyles();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <Card className={isMenuOpen?classes.root:classes.modifyRoot}>
        <CardMedia
          className={classes.media}
          image={thumbnails.medium.url}
          title= {title}
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="h3" fontWeight='bold'>
            {hideMoreText(title, false, 25)}

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {channelTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {statistics.viewCount}
          </Typography>
        </CardContent>
    </Card>
  );
}