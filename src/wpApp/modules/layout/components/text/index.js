import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';


@bem({
  block: 'ggText',
  modifiers: ['center', 'lightWeight', 'noMarginTop', 'usualMarginBottom', 'mini']
})
export default class GG_Text extends Component {
  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('wrap')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
