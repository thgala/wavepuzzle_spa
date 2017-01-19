import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';


@bem({
  block: 'header'
})
export default class WP_Header extends Component {
  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('wrap')}>
          <div className={this.element('logo')} />
          <div className={this.element('menu')}>
            <Link
              to="/"
              activeClassName={this.element('menuLink--active')}
              className={this.element('menuLink')}>
              Home
            </Link>
            <Link
              to="/portfolio"
              activeClassName={this.element('menuLink--active')}
              className={this.element('menuLink')}>
              Portfolio
            </Link>
            <Link
              to="/shop"
              activeClassName={this.element('menuLink--active')}
              className={this.element('menuLink')}>
              Shop
            </Link>
            <Link
              to="/contacts"
              activeClassName={this.element('menuLink--active')}
              className={this.element('menuLink')}>
              Contacts
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
