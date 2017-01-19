import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';


@bem({
  block: 'subImage'
})
export default class WP_Cakte extends Component {
  render() {
    const
      { path, absPath } = this.props,
      imageUrl = !!path ? require(path) : absPath,
      subImageStyles = {
        backgroundImage: `url(${imageUrl})`
      }

    return (
      <div className={this.block()}>
        <div className={this.element('wrap')}
          style={subImageStyles}
        />
      </div>
    );
  }
}
