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
      { path } = this.props,
      subImageStyles = {
        backgroundImage: `url(${path})`
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
