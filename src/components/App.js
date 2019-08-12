import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import appStyles from '../css/App.module.css';

const App = () => (
  <div className={`${appStyles.mt} ui container grid`}>
    <div className="ui row">
      <div className="column eight wide">
        <SongList />
      </div>
      <div className="column eight wide">
        <SongDetail />
      </div>
    </div>
  </div>
);

export default App;
