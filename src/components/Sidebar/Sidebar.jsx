import React from 'react'
import "./Sidebar.css"
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../store/DataLayer';

function Sidebar() {

  const [{playlists}, dispatch] = useDataLayerValue()

  return (
    <div className='sidebar'>
      <img
      className='sidebar_logo' 
       src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='' />

       <SidebarOption Icon={HomeIcon} title="Home" />
       <SidebarOption Icon={SearchIcon} title="Search" />
       <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
       
      <br />
       <strong className='sidebar_title'>PLAYLISTS</strong>
       <hr color='white'/>

       {playlists?.items?.map(playlist =>(
        <SidebarOption title={playlist.name} />
       ))}

      
      </div>
  )
}

export default Sidebar
