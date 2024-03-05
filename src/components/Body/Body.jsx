import React from 'react'
import "./Body.css"
import Header from '../Header/Header'
import { useDataLayerValue } from '../../store/DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from '../SongRow/SongRow';

function Body({spotify}) {

  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
       <Header spotify={spotify}/>

       <div className="body_info">

        <img 
        src={discover_weekly?.images[0].url} 
        alt='' />

        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam officiis nisi dolorem et excepturi error, cumque doloribus deleniti quod suscipit dolores incidunt id esse quaerat, expedita assumenda? Praesentium, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cumque.</p>
        </div>

       </div>

       <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className='body_shuffle'/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon />
        </div>


        {/* List of Songs */}
        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track}/>
        ))}
       </div>

    </div>
  )
}

export default Body