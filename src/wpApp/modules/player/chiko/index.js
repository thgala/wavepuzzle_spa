import BaseClass from './_base';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';
import ReactPlayer from 'react-player';


@bem({
  block: 'wpPlayer',
  modifiers: ['audio', 'video', 'dark']
})
export default class WP_Player extends BaseClass {

  render() {
    const
      {
        isPlaying,
        played,
        ready,
        fullscreen
      } = this.state;

    const
      { 
        image,
        media,
        dark
      } = this.props,
      backgroundStyle = {
        backgroundImage: `url(${image})`
      },
      onStart = played === 0;

    return (
      <div className={this.block({ fullscreen, onStart })}>
        <div className={this.element('background')} style={backgroundStyle} />
        <div className={this.element('wrap')}>
          <ReactPlayer
            ref={ player => this.player = player }
            url={media}
            className={this.element('self')}
            playing={isPlaying}
            onProgress={this.onProgress}
            onReady={this.onReady}
          />
          <div className={this.element('controls', { ready })}>
            {!isPlaying
              ? <div
                  className={this.element('play')}
                  onClick={() => this.playStop(true)} />
              : <div
                  className={this.element('pause')}
                  onClick={() => this.playStop(false)} />
            }
            <div className={this.element('range')}>
              <div className={this.element('rangeCursor')}
                style={{ "width": `${100 * played}%` }}
              />
              <input
                className={this.element('inputRange')}
                type='range' min={0} max={1} step='any'
                value={played}
                onMouseDown={this.onSeekMouseDown}
                onChange={this.onSeekChange}
                onMouseUp={this.onSeekMouseUp}
              />
            </div>
            <div
              className={this.element('fullscreen')}
              onClick={this.videoFullscreen}
            />
          </div>
        </div>
      </div>
    );
  }
}
