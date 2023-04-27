import Sidebar from '../../component/sidebar'
import MainContainer from '../../src/Dashboard/MainContainer'

import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import dynamic from 'next/dynamic';


const useStyles = makeStyles({
  pageContainer: {
    display: 'flex',
  },
});
function Dashboard() {
  const classes = useStyles();

    return (
      <>
      <Box className= {classes.pageContainer} >
        <Sidebar/>
        <MainContainer/>
        </Box>
      
      </>
    )
  }
  export default dynamic(() => Promise.resolve(Dashboard), {
    ssr: false
});