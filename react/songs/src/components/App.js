import React from 'react';
import {selectedSong} from '../actions/index';
import SongList from './SongList';
import SongDetail from './SongDetail';
const App = () => {
  return (
    <div className = "ui container grid">
      <div className = "ui row">
        <div className = "column eight wide" style = {{marginLeft : "-20px"}}>
          <SongList/>
          </div>
        <div className = "column eight wide">
        <SongDetail/>
        </div>
      </div>
  </div>
  )
};

export default App;
