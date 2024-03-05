export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    //Remove token value after finish developing make it to null
  // token: 'BQBQk3o7Ub0p2y06eOWt2w9xbsBnu-RwtEo55toYqSDRpnGTH0PuQiP7iy8uP764hUhIrnmQ8ylhGF3EXFayOaGsZkJvYAuwgOz4RfcEFMifGQiziqsgZUprvXyjeOpM7Vh5ZckzbfJTPg4BsB9dxVGDDNcp_DSIIdJ6jxFaRRgabF_mqjk189DG9TozDSerU_nwlZ818mSIug0g2qJG ',
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER': 
          return{
            ...state,
            user: action.user
          }
        
        case 'SET_TOKEN':
          return {
            ...state,
            token: action.token
          }

        case 'SET_PLAYLISTS':
          return{
            ...state,
            playlists: action.playlists,
          }  

        case 'SET_DISCOVER_WEEKLY':
          return{
            ...state,
            discover_weekly: action.discover_weekly,
          }  

          default:
            return state;
    }
}

export default reducer;