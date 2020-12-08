import { combineReducers } from "redux";
//song list reducer
const songsReducer = () => {
  return [
    {
      title: "song 1",
      duration: "2:35"
    },
    {
      title: "song 2",
      duration: "1:23"
    },
    {
      title: "song 3",
      duration: "1:27"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
