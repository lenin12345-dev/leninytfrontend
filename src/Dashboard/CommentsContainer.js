import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  commentcontainer: {
    margin:5,
    padding:2,
    marginTop:9
  },
  watchPage:{
    margin:15
  },
  commentDetails:{
    display:'flex',
    margin:10,
    padding:10,
    border: '15px solid #fff',
    backgroundColor:'#E8E8E8',
    alignItems:'center',
    borderRadius:16
  
  },
  commentList:{
    paddingLeft:10,
    border:'1px solid #C0C0C0',
    marginLeft:10,
  }
});


const commentsData = [
  {
    name: "Lenin Mohapatra",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Lenin Mohapatra",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Lenin Mohapatra",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Lenin Mohapatra",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Lenin Mohapatra",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Lenin Mohapatra",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Lenin Mohapatra",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Lenin Mohapatra",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Lenin Mohapatra",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Lenin Mohapatra",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Lenin Mohapatra",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Lenin Mohapatra",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Lenin Mohapatra",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  const classes = useStyles();

  return (
    <Box className= {classes.commentDetails}>
      <img
        style={{width:40,height:40}}
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <Box mx={2}>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </Box>
    </Box>
  );
};

const CommentsList = ({ comments }) => {
  const classes = useStyles();

  return comments.map((comment, index) => (
    <Box key={index}>
      <Comment data={comment} />
      <Box className= {classes.commentList}>
        <CommentsList comments={comment.replies} />
      </Box>
    </Box>
  ));
};

const CommentsContainer = () => {
  const classes = useStyles();

  return (
    <Box className= {classes.commentcontainer} >
      <h2 >Comments: </h2>
      <CommentsList comments={commentsData} />
    </Box>
  );
};

export default CommentsContainer;
