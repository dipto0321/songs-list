import React from 'react';
import SongList from './SongList';
import appStyles from '../css/App.module.css';

const App = () => (
  <div className={`${appStyles.mt} ui container`}>
    <SongList />
  </div>
);

export default App;
