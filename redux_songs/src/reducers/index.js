import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Meri duniya hey.....", duration: "2.30" },
    { title: "I love you.....", duration: "4.20" },
    { title: "Mere Khuda.....", duration: "1.35" },
    { title: "Hansi ban gye.....", duration: "5.00" },
    { title: "Kitna sona.....", duration: "1.20" },
    { title: "AAja aayi bahar.....", duration: "4.45" },
    { title: "Kon hey who.....", duration: "2.15" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
