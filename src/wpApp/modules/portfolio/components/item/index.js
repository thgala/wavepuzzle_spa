import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';
import bem from 'react-bem-classes';


@bem({
  block: 'wpPortfolioItem'
})
export default class WP_PortfolioItem extends Component {
  render() {
    return (
      <div className={this.block()}>

      </div>
    );
  }
}
