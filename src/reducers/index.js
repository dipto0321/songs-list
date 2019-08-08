import { combineReducers } from 'redux';
import songsSelected from '../data/actionsNames';

const songsReducer = () => {
  return [
    {
      title: 'Friend',
      duration: '4:05'
    },
    {
      title: "We don't talk anymore!",
      duration: '3:05'
    },
    {
      title: 'Work',
      duration: '6:59'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === songsSelected) {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
