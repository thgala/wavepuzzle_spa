import * as WP_LayoutSelectors from './../../selectors';

import './index.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/* components */
import bem from 'react-bem-classes';


@connect(
  createStructuredSelector({
    layoutGlobalLoader: WP_LayoutSelectors.globalLoader
  })
)
@bem({
  block: 'globalLoader'
})
export default class GlobalLoader extends Component {
  render() {
    return (
      <div className={this.block({ active: this.props.layoutGlobalLoader})} />
    );
  }
}
