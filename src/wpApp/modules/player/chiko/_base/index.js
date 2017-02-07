import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'

import './index.scss';

import React, { Component } from 'react';


export default class WP_PlayerBase extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      played: 0,
      seeking: false,
      ready: false,
      fullscreen: false,
      withImage: !!props.image
    }

    this.playStop = this.playStop.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onReady = this.onReady.bind(this);
    this.fullsreenDetector = this.fullsreenDetector.bind(this);
    this.videoFullscreen = this.videoFullscreen.bind(this);
  }

  componentDidMount() {
    if (screenfull.enabled) {
      document.addEventListener(screenfull.raw.fullscreenchange, this.fullsreenDetector);
    }
  }

  componentWillUnmount() {
    if (screenfull.enabled) {
      document.removeEventListener(screenfull.raw.fullscreenchange, this.fullsreenDetector);
    } 
  }

  fullsreenDetector(){
    this.setState({ fullscreen: screenfull.isFullscreen })
  }

  playStop(isPlaying){
    this.setState({ isPlaying })
  }

  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true })
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false })
    this.player.seekTo( parseFloat(e.target.value) )
  }

  onProgress(state) {
    if (!this.state.seeking) this.setState(state)
  }

  onReady(){
    this.setState({ ready: true })
  }

  videoFullscreen(){
    this.setState({ ready: true })
    screenfull.request(findDOMNode(this.player))
  }
  
}
