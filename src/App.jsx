import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import { getTokenFromUrl } from './components/Spotify/Spotify'
import SpotifyWebApi from "spotify-web-api-js"
import Player from './components/Player/Player'
import { useDataLayerValue } from './store/DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  

  const [{user, token}, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

     

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
     

        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist('0QU4HEHNT9C6mK4NKGkqVJ').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })

    }

    
  }, [])




  return (

    <div className="app">
    {
      token ? (
        <Player spotify={spotify}/>
      ) : (
        <Login />
      )
    }
   
   
    </div>
  )
}

export default App
