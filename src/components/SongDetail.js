import React from 'react';

import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Please select a song!</div>;
  }
  return (
    <div>
      <h1>Song Details</h1>
      <hr />
      <p>
        <strong>Title: </strong> {song.title}
      </p>
      <p>
        <strong>Duratiron: </strong> {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
