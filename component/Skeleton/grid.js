import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid } from '@material-ui/core';

const SkeletonRectangles = ({number}) => {
  return (
    <Grid container spacing={1}>
      {[...Array(number)].map((_, index) => (
        <Grid item xs={12} md={3} key={index}>
          <Skeleton variant="rect" width= {350} height={200} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonRectangles;