import WP_Router from 'wpApp/modules/router';

import './index.scss';

import React, { Component } from 'react';
import bem from 'react-bem-classes';
import { Link } from 'react-router';


@bem({
  block: 'wpButton',
  modifiers: [
    'loading', 'disabled', 'autoWidth', 'paypal', 'noArrow'
  ]
})
export default class WP_Button extends Component {
  render() {

    const
      { to, text, onClick, loading, disabled, type } = this.props;

    return to ? (
      <button disabled={disabled || loading} className={this.block()} type={type}>
        <Link
          onClick={onClick}
          to={to}
          className={this.element('box')}>
          <div className={this.element('text')}>
            {text}
          </div>
        </Link>
      </button>
    ) : (
      <button className={this.block()} type={type}>
        <div
          onClick={onClick}
          className={this.element('box')}>
          <div className={this.element('text')}>
            {text}
          </div>
        </div>
      </button>
    )
  }
}
