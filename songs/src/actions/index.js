//Action creator
export const selectSong = (song)=>{
    //return Action
    return {
        type : 'SONG_SELECTED',
        payload : song
    };
}