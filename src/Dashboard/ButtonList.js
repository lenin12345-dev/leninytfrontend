import React from "react";
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      marginTop: 8
    },
    chip: {
      margin: theme.spacing(0.5),
      padding: theme.spacing(0.5)
    },
  }));

const ButtonList = () => {
    const classes = useStyles();
const chipList = [
    {
        name:'All',
        id:1
    },
    {
        name:'Gaming',
        id:2
    },
    {
        name:'Songs',
        id:3
    },
    {
        name:'Live',
        id:1
    },
    {
        name:'Soccer',
        id:1
    },
    {
        name:'Cricket',
        id:1
    },
    {
        name:'Cooking',
        id:1
    },
    {
        name:'Apple',
        id:1
    },
    {
        name:'Music',
        id:1
    },
    {
        name:'Motivation',
        id:1
    },
    {
        name:'Comedy',
        id:1
    },
    {
        name:'Bollywood Music',
        id:1
    },
    {
        name:'Chillout Music',
        id:1
    },
    {
        name:'Indian Premier League',
        id:1
    },
    {
        name:'Indian super league',
        id:1
    },


]

  return (
    <Box display= 'flex' justifyContent= 'start'  className={classes.root}   >
              {chipList.map((data) => {
        return (
          <Box key={data.id}>
            <Chip
              label={data.name}
              size='medium'
              className={classes.chip}
              clickable
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default ButtonList;
