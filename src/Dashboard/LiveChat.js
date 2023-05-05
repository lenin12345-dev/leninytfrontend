import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../../utils/helper";
import ChatMessage from "./ChatMessage";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: 600,
    marginLeft: 40,
    paddingLeft: 10,
    border: "1px solid beige",
    borderRadius: "10px",
    backgroundColor: "aliceblue",
    marginBottom: -6,
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column-reverse",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      width: "auto",
    },
  },
  sendMessage: {
    display: "flex",
    alignItems: "center",
    marginLeft: 42,
    width: "90%",
    [theme.breakpoints.down("md")]: {
      marginLeft: 10,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "auto",
    },
  },
  textField: {},
}));

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

  const Submit = () => {
    dispatch(
      addMessage({
        name: "Lenin Mohapatra",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      <Box display="block" justifyContent="center">
        <Box className={classes.root}>
          <div>
            {chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
          </div>
        </Box>
        <Box className={classes.sendMessage}>
          <TextField
            id="outlined-margin-dense"
            className={classes.textField}
            fullWidth
            margin="dense"
            variant="outlined"
            value={liveMessage}
            placeholder="Chat publicly as Lenin Mohapatra"
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                Submit();
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={Submit}
                    variant="contained"
                    style={{ width: "25px" }}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </>
  );
};
export default LiveChat;
