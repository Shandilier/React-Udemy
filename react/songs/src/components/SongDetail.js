import React from 'react';
import {connect } from 'react-redux';

const SongDetail = (props) => {
    console.log(props.selectedSong);
    if(props.selectedSong===null)
        return <div></div>
    else
    {
        return (
            <div key = {props.selectedSong.title}>
                <h3>Song : </h3>{props.selectedSong.title}
                <br></br>
                <h3>Duration : </h3>{props.selectedSong.duration}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {selectedSong : state.selectedSong}   // One of reducer function is called here
}

export default connect(mapStateToProps)(SongDetail);