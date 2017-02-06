import WP_Layout from 'wpApp/modules/layout';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MediaQuery from 'react-responsive';
import { createStructuredSelector } from 'reselect';


// @connect(
//   createStructuredSelector({
//     user: ggAuth.selectors.user,
//     order: ggOrder.selectors.orderActive
//   })
// )
export default class CheckoutHome extends Component {

  render() {
    return (
      <section>
        <WP_Layout.components.container>
          <WP_Layout.components.subtitle home>
            <WP_Layout.components.textField
              slug="home-description"
            />
          </WP_Layout.components.subtitle>
          <WP_Layout.components.subImage
            path={'./images/cake.jpg'}
          />
        </WP_Layout.components.container>
      </section>
    );
  }
}
