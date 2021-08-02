import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title : 'IDFC',duration : '1'},
        {title : 'Dont let me down',duration : '2'},
        {title : 'Hymn of the weekend',duration : '3'},
        {title : 'Faded',duration : '4'}
    ];
};

const selectedSongReducer = (selectedSong = null,action) => {
    if(action.type === 'SONG_SELECTED')
        return action.payload;

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong : selectedSongReducer
});