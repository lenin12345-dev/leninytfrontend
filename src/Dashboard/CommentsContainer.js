import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import api from "../config/api"

const useStyles = makeStyles((theme) => ({
  commentContainer: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      boxShadow: "none",
    },
  },
  header: {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    color: "#333",
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.2rem',
    },
  },
  textField: {
    marginBottom: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  button: {
    marginBottom: theme.spacing(2),
    width: '10%',
    [theme.breakpoints.down("md")]: {
      width: '50%',
      alignSelf:'center'
    },
  },
  commentDetails: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    border: "1px solid #ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: 30,
      height: 30,
    },
  },
  commentContent: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  commentList: {
    marginTop: theme.spacing(2),
  },
  noComments: {
    marginTop: theme.spacing(2),
    fontStyle: 'italic',
    color: '#888',
  },
}));

const Comment = ({ data }) => {
  const classes = useStyles();
  const { author, text } = data;

  return (
    <Box className={classes.commentDetails}>
      <img
        className={classes.avatar}
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <Box className={classes.commentContent}>
        <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
          {author}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </Box>
    </Box>
  );
};

const CommentsList = ({ comments }) => {
  const classes = useStyles();

  return (
    <Box className={classes.commentList}>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <Comment key={index} data={comment} />
        ))
      ) : (
        <Typography className={classes.noComments}>
          No comments yet
        </Typography>
      )}
    </Box>
  );
};

const CommentsContainer = () => {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const router = useRouter();
  const { videoId } = router.query;

  const fetchComments = async () => {
    try {
      const { data } = await api.get(`/api/comments/${videoId}`);
      setComments(data?.comments || []);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const postComment = async () => {
    try {
      const data = { text: comment, videoId, author: "Anonymous" };
      await api.post("/api/comment", data);
      setComments((prevComments) => [
        { author: "Anonymous", text: comment },
        ...prevComments,
      ]);
      setComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const handlePost = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      postComment();
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchComments();
    }
  }, [videoId]);

  return (
    <Box className={classes.commentContainer}>
      <Box display={'flex'} flexDirection={'column'}>
        <Typography variant="h6" className={classes.header}>
          Post a Comment
        </Typography>
        <TextField
          id="outlined-basic"
          label="Add here"
          variant="outlined"
          size="small"
          className={classes.textField}
          value={comment}
          multiline
          rows={4}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handlePost}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={postComment}
          size="large"
        >
          Send
        </Button>
      </Box>
      <Typography variant="h6" className={classes.header}>
        Comments:
      </Typography>
      <CommentsList comments={comments} />
    </Box>
  );
};

export default CommentsContainer;
