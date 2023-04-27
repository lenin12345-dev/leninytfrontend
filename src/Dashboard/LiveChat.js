import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../../utils/helper";
import ChatMessage from "./ChatMessage";
import { makeStyles } from "@material-ui/core/styles";
import { Box,Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    width: "90%",
    maxWidth:'90%',
    height: 600,
    marginLeft: 40,
    paddingLeft: 10,
    border: "1px solid beige",
    borderRadius: "10px",
    backgroundColor: "aliceblue",
    marginBottom:-6,
    overflowY:'scroll',
    display:'flex',
    flexDirection:'column-reverse'
    
  },
  sendMessage:{
    display:'flex',
    alignItems:'center',
    marginLeft: 42,
    width:'90%'

  },
  textField:{
    // width:'80%',
    // marginLeft:5
  }
});

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
    // API Polling

    dispatch(
      addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(20) + " 🚀",
      })
    );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  const Submit = ()=>{
    dispatch(
      addMessage({
        name: "Lenin Mohapatra",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  }

  return (
    <>
      <Box display= 'block' justifyContent= 'center'>

      <Box className={classes.root}>
        <div>
          {
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </Box>
      <Box className={classes.sendMessage}>
      <TextField
        id="outlined-margin-dense"
        className={classes.textField}
        fullWidth
        margin="dense"
        variant="outlined"
        placeholder=""
        value={liveMessage}
        onChange={(e) => {
          setLiveMessage(e.target.value);
        }}
        onKeyPress={(event)=>{
          if(event.key === 'Enter'){
            Submit()
          }
      }}
      />
      <Button
        onClick={Submit}
        color="secondary"
        variant="contained"
        style={{ width: '25px' }}
   
      >
        Send
      </Button>
      </Box>
      </Box>

    </>
  );
};
export default LiveChat;
