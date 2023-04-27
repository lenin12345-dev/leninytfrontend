
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import Multi from './Multi';

const useStyles = makeStyles(theme => ({
    notesCard:{
        borderRadius: 20,
        border:`1px solid ${theme.palette.grey[300]}`,
        cursor:'pointer',
        height: '92px',
    },
    cardContent:{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        // padding:theme.spacing(1)
    },
    mcqName: {
        fontWeight: 600,
        fontSize: 20,
        marginBottom: theme.spacing(0.3),
        color: theme.palette.grey[800],
        [theme.breakpoints.down('sm')]: {
            fontSize: 18
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    noOfChildQuestionSet:{
        fontSize: 16,
        color:theme.palette.grey[600],
    }
}));

const CardComponent=(props)=>{
    console.log('props',props);
    const classes = useStyles();
    return <Multi {...props}>
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    props.isShowAvatar? <Avatar className={classes.avatar}>
                        <Skeleton />
                    </Avatar>: null
                }
                subheader={<Skeleton className={classes.top} />}
                title={<Skeleton className={classes.top} />}
            />
            <CardContent>
                <Typography component="p">
                    <Skeleton className={classes.bottom} />
                </Typography>
                <Typography component="p">
                    <Skeleton className={classes.bottom} />
                </Typography>
            </CardContent>
        </Card>
    </Multi>;
};

CardComponent.propTypes={
    numberOfCard:PropTypes.number,
    gridProps:PropTypes.object,
    isShowAvatar:PropTypes.bool,
};
CardComponent.defaultProps={
    numberOfCard:1,
    gridProps:{},
    isShowAvatar:true
};
export default CardComponent;


