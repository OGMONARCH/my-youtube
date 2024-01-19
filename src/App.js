import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => {
  return(
    <BrowserRouter>
    <Box sx={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 100%);"}}>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/video/:id" exact element={<VideoDetail />}/>
    <Route path="/channel/:id" element={<ChannelDetail />}/>
    <Route path="/search/:searchTerm" element={<SearchFeed />}/>
    </Routes>
    </Box>
    </BrowserRouter>
  )

}

export default App