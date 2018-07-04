import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout/index';
import Video from '../components/video/index';
import Title from '../components/title/index';
import PlayPause from '../components/play-pause/index';
import Timer from '../components/timer/index';
import Controls from '../components/video-player-controls/index';
import ProgressBar from '../components/progress-bar/index';
import Spinner from '../components/spinner/index';
import Volume from '../components/volume/index';
import FullScreen from '../components/fullscreen/index';
import { connect } from 'react-redux';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    oldVolume: null
  };
  togglePlay = (ev) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    });
  }
  handleLoadedMetadata = ev => {
    this.video = ev.target;
    // console.log(this.video);
    this.setState({
      duration: this.video.duration
    });
  };
  handleVideoTime = (ev) => {
    // console.log(this.video.currentTime);
    this.setState({
      currentTime: this.video.currentTime
    });
  };
  leftPad = (num) => {
    const pad = '00';
    return pad.substring(0, pad.length - num.length) + num;
  };
  formattedTime = (secs) => {
    const minutes = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60, 10);
    return `${this.leftPad(minutes)} : ${this.leftPad(seconds.toString())}`;
  };
  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value
  };
  handleSeeking = () => {
    this.setState({
      loading: true
    });
  };
  handleSeeked = () => {
    this.setState({
      loading: false
    });
  };
  handleVolumeChange = (event) => {
    this.video.volume = event.target.value;
  };

  handleFullScreen = event => {
    if(!document.webkitIsFullScreen){
      this.player.webkitRequestFullScreen();
    } else {
      document.webkitExitFullscreen();
    }
  };

  setRef = el => {
    this.player = el;
  };
  handleMuteEvent = (ev) => {
    // console.log(this.video.volume);
    // this.setState({
    //   oldVolume: this.video.volume
    // });
    if (this.video.volume > 0){
      this.video.volume = 0;
    } else {
      
    }

  };
  render(){
    return (
      <VideoPlayerLayout
       setRef={this.setRef}
      >
        <Title
          title={this.props.media.get('title')}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.formattedTime(this.state.duration)}
            currentTime={this.formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume 
            handleVolumeChange={this.handleVolumeChange}
            handleMuteEvent={this.handleMuteEvent}
          />
          <FullScreen 
            handleFullScreen={this.handleFullScreen}
          />
        </Controls>
        <Spinner 
          active={this.state.loading}
        />
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleVideoTime}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.media.get('src')}
        />
      </VideoPlayerLayout>
    )
  }
}

function mapStateToProps(state, props){
  // console.log(props.id)
  // console.log(state.get('data').get('entities').get('media'))
  return {
    media: state.get('data').get('entities').get('media').get(props.id)
  }
}

export default connect(mapStateToProps)(VideoPlayer);
