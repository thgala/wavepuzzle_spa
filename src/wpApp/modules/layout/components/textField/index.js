import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


@connect(
  createStructuredSelector({
    user: ggAuth.selectors.user,
    order: ggOrder.selectors.orderActive
  })
)
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
