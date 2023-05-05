import React  from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MuiLink from '@material-ui/core/Link';
import { indigo } from '@material-ui/core/colors';
import dynamic from "next/dynamic";



const useStyles = makeStyles(theme => ({
    mainContainer:{
        display: 'flex',
        alignItems: 'center',
        height: 'calc(100vh - 100px)',
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100vh - 100px)',
            textAlign: 'center',
        },
        [theme.breakpoints.only('sm')]: {
            height: 'calc(100vh - 100px)',
            textAlign: 'center',
        },
    },
    later:{
        
        fontWeight:600,
        marginBottom: theme.spacing(1),
    },
    text: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(-6),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(-10),
        },
        [theme.breakpoints.only('sm')]: {
            marginTop: theme.spacing(-6),
        },
    },
    img: {
        width: 'auto',
        height: 'auto',
        maxWidth: '100%',
    },
    margin: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(2),
        width:200,
        color: theme.palette.getContrastText(indigo[400]),
        backgroundColor: indigo[400],
        '&:hover': {
            backgroundColor: indigo[700],
        },
    },

}));


function  ErrorDefault ({t}) {


    const classes = useStyles();


    return(
        <Container>
            <Grid
                className={classes.mainContainer}
                container
            >
                <Grid
                    item
                    md={6}
                    sm={12}
                >
                    <img
                        alt="error"
                        className={classes.img}
                        src={'./public/404.png'}
                    />
                </Grid>
                <Grid
                    item
                    md={6}
                    sm={12}
                    xs={12}
                >
                    <div className={classes.text}>
                        <Typography
                            className={classes.later}
                            variant='h3'
                        >
                            This page is not available
                        </Typography>
                    
                        <Button
                            className={classes.margin}
                            component={MuiLink}
                            href={'/youtube'}
                            variant="contained"
                            color="primary"
                        >
                           Go to Home
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}





export default dynamic(() => Promise.resolve(ErrorDefault), {
    ssr: false,
  });
  
