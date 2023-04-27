import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants";
import VideoCard  from "../Dashboard/Videocard";
// import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { calculateSizeAdjustValues } from "next/dist/server/font-utils";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Skeleton from '../../component/Skeleton/grid';
import InfiniteScroll from '../../component/InfiniteScroll';

const useStyles = makeStyles({
  videoContainer: {
      display: 'flex',
      flexWrap:'wrap',
      margin:4,
    },
    emptyText:{
      fontWeight:'bold',
      margin:20
    }
  });

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading,setLoading] = useState(false);
  const classes = useStyles();
  const [hasMore, setHasMore] = useState(true);
  const [token, setToken] = useState('');


  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    if (!hasMore) return;
    setLoading(true)
    const data = await fetch(YOUTUBE_VIDEOS_API + `&pageToken=${token}`);
    const json = await data.json();
    const { nextPageToken,items=[] } = json
    setVideos([...videos,...items]);
    setHasMore(nextPageToken && nextPageToken!== undefined ?nextPageToken.length>0:false)
    setToken(nextPageToken);
    setLoading(false)
  };

  return (
    <>

      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {/* {loading?<Skeleton number={30} />:} */}

            <InfiniteScroll
                hasMore={hasMore}
                // component={List}
                loader={<div className={classes.loaderAlign}><Skeleton number={4} /></div>}
                loadMore={()=>getVideos()}
                pageStart={0}
            >
    <Box   className= {classes.videoContainer}>

   {        videos.map((video) => (
        <Link key={video.id} href="/youtube/[videoId]" as={`/youtube/${video.id}`}>
          <a>
          <VideoCard key={video.id} info={video} />
          </a>
          </Link>
      ))}
            </Box>

   
          
            </InfiniteScroll>
            {
                   !hasMore && !loading ?
                        <Typography
                            align="center"
                            className={classes.emptyText}
                            variant="h5"
                        >
                            {' '}
                            No Video Found
                        </Typography> : ''
                }
    </>
  );
};

export default VideoContainer;
