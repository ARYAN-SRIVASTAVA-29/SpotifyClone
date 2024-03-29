import React from 'react'
import './Footer.css'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
     <div className="footer_left">
    <img
    className='footer_albumLogo' 
    src='https://i.discogs.com/yGqNW8_pPzzPM0_0TU9qw8jdTbjBqMppvFuUQjyb0p0/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MzM4/ODAtMTIyNjYxNzU0/OC5qcGVn.jpeg' alt=''/>
    <div className="footer_songInfo">
      <h4>Yeah</h4>
      <p>Usher</p>
    </div>
     </div>

     <div className="footer_center">
     <ShuffleIcon className="footer_green"/>
      <SkipPreviousIcon className="footer_icon" />
      <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
      <SkipNextIcon className="footer_icon" />
      <RepeatIcon className="footer_green"/>
     </div>

     <div className="footer_right">
    <Grid container spacing={2}>
      <Grid item>
        <PlaylistPlayIcon />
      </Grid>
      <Grid item>
        <VolumeDownIcon />
      </Grid>
      <Grid item xs>
        <Slider/>
      </Grid>
    </Grid>
     
     </div>
      </div>
  )
}

export default Footer