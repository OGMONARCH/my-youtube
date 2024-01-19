import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { Videos, ChannelCard } from "./" ;
import { fetchFromAPI } from '../utils/fetchFromAPI';
import zIndex from '@mui/material/styles/zIndex';

const   ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])

      const { id } = useParams();


      // console.log(channelDetail, videos)

      useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setVideos(data?.items));
      }, [id])

  return (
  <Box minHeight="95vh">
    <Box>
        <div style={{
            background: " linear-gradient(90deg, rgba(49,12,214,0.8323704481792717) 1%, rgba(9,121,11,0.6026785714285714) 50%, rgba(236,255,0,0.8071603641456583) 100%)",
            height: "300px",
            zIndex: 10
        }}
      
        />
        <ChannelCard channelDetail={channelDetail}  marginTop="-110px"/>
    </Box>
    <Box display="flex" p="2">
        <Box sx={{mr : {sm: "100px"}}}>
        <Videos videos={ videos } />
        </Box>
    </Box>
  </Box>
  )
}

export default ChannelDetail