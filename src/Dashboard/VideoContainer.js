import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants";
import VideoCard from "../Dashboard/Videocard";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Skeleton from "../../component/Skeleton/grid";
import InfiniteScroll from "../../component/InfiniteScroll";


const useStyles = makeStyles((theme) => ({
  videoContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: 4,
    [theme.breakpoints.down("md")]: {
      margin: 0,
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  emptyText: {
    fontWeight: "bold",
    margin: 20,
  },
}));

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const [hasMore, setHasMore] = useState(true);
  const [token, setToken] = useState("");
console.log('YOUTUBE_VIDEOS_API',YOUTUBE_VIDEOS_API)


  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    if (!hasMore) return;
    setLoading(true);
    const data = await fetch(YOUTUBE_VIDEOS_API + `&pageToken=${token}`);
    const json = await data.json();
    const { nextPageToken, items = [] } = json;
    setVideos([...videos, ...items]);
    setHasMore(
      nextPageToken && nextPageToken !== undefined
        ? nextPageToken.length > 0
        : false
    );
    setToken(nextPageToken);
    setLoading(false);
  };

  return (
    <>
      <InfiniteScroll
        hasMore={hasMore}
        loader={
          <div className={classes.loaderAlign}>
            <Skeleton number={4} />
          </div>
        }
        loadMore={() => getVideos()}
        pageStart={0}
      >
        <Box className={classes.videoContainer}>
          {videos.map((video) => (
            <Link
              key={video.id}
              href="/youtube/[videoId]"
              as={`/youtube/${video.id}`}
            >
              <a style={{ textDecoration: "none" }}>
                <VideoCard key={video.id} info={video} />
              </a>
            </Link>
          ))}
        </Box>
      </InfiniteScroll>
      {!hasMore && !loading ? (
        <Typography align="center" className={classes.emptyText} variant="h5">
          {" "}
          No Video Found
        </Typography>
      ) : (
        ""
      )}
    </>
  );
};

export default VideoContainer;
