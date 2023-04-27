
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


function Multi({numberOfCard,gridProps,isGridView=false,children}) {
   
    return (
        <Box mt={2} width="100%">
            {isGridView? <Grid  container alignContent='center' spacing={2} >
                {Array.from({ length: numberOfCard }, (_, i) => 
                    Array.from({ length: 2 }, (_, index) => 
                        <Grid key={index + i} item  {...gridProps}>
                            {children}
                        </Grid>
                    )
                )}
            </Grid> :
                Array.from({ length: numberOfCard }, () =>
                    <Box mb={2}>{children}</Box>
                )
            }   
        </Box>
    );
}

Multi.propTypes={
    numberOfCard:PropTypes.number,
    gridProps:PropTypes.object
};
Multi.defaultProps={
    numberOfCard:1,
    gridProps:{}
};

export default Multi;

