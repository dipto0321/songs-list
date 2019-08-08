import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  state = {};

  render() {
    return <div className="song-list">SongList</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
