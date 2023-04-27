const GOOGLE_API_KEY = "AIzaSyBDhpqD0sXdSUTGWXpwPL8flJemVmB2tl8";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=IN&key=
  ${GOOGLE_API_KEY}` ;

export const YOUTUBE_SEARCH_API =
  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=
 ${GOOGLE_API_KEY} &`;

// Live Chat >>>> Infinite Scroll >>>>>> Pagination
