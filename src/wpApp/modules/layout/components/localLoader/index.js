import './index.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

/* components */
import bem from 'react-bem-classes';


@bem({
  block: 'localLoader'
})
export default class LocalLoader extends Component {
  render() {
    return this.props.active === true
      ? <div className={this.block()} />
      : <div>{this.props.children}</div>
  }
}
