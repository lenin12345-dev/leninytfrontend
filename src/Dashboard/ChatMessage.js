import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic';


const useStyles = makeStyles({
  root: {
    padding:4,
    borderBottom:'0.2px inset',
    width:'fixed'
  },
  name: {
   fontWeight:'bold',
   marginRight:8
  },
});


const ChatMessage = ({ name, message }) => {
  const classes = useStyles();

  return (
    <Box display= 'flex' alignItems= 'center' className={ classes.root }  >
      <img
        style={{ height:28,marginRight:10 }}
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className={classes.name} >{name}</span>
      <span>{message}</span>
      </Box>
  );
};
export default dynamic(() => Promise.resolve(ChatMessage), {
  ssr: false
});
