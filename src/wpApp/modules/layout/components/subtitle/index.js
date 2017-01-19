import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';


@bem({
  block: 'subtitle',
  modifiers: ['center', 'lightWeight', 'noMarginTop', 'usualMarginBottom', 'mini']
})
export default class GG_Subtitle extends Component {
  render() {
    return (
      <div className={this.block()}>
        {this.props.children}
      </div>
    );
  }
}
