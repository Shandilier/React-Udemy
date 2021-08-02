import { Component } from "react";
import React from 'react';
import {connect} from 'react-redux';
import {selectedSong} from '../actions';
class SongList extends Component {

    renderList() {
        return this.props.songs.map( (song) =>{
            return (
                <div className = "item" key = {song.title}>
                    <div className = "right floated content">
                        <button className = "ui button primary" onClick = {()=> {this.props.selectedSong(song)}}>
                            Select
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;{song.title}
                    </div>
                    <br></br>
                </div>
            )
        });
    }
    render() {
        // console.log(this.props); 
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    // console.log(state);
    return {songs : state.songs};  // one of reducer function is assigned here.
}

export default connect(mapStateToProps,{selectedSong}) (SongList);