import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';


@bem({
  block: 'logo'
})
export default class WP_Logo extends Component {
  render() {
    return (
      <div className={this.block()} style={{
        width: this.props.sq,
        height: this.props.sq
      }}/>
    );
  }
}
