import songsSelected from '../data/actionsNames';

const selectSong = song => {
  return {
    type: songsSelected,
    payload: song
  };
};

export default selectSong;
