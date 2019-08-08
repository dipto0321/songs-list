import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectSong from '../actions';
import songListStyles from '../css/SongList.module.css';

class SongList extends Component {
  renderList = ({ songs, selectSong }) => {
    return songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className={`${songListStyles.mt}  ui relaxed divided list`}>
        {this.renderList(this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
