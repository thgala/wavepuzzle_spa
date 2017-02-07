import WP_Layout from 'wpApp/modules/layout';
import WP_Player from 'wpApp/modules/player';

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
          <WP_Player.chiko
            audio
            image={`https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16228673_248909455549720_1218407867401371648_n.jpg?ig_cache_key=MTQzOTI3MDEwNTU0MDA0NjA0Mg%3D%3D.2`}
            media={`https://soundcloud.com/wavepuzzle/yacht-club`}
          />
          <WP_Player.chiko
            video
            dark
            image={`https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16228673_248909455549720_1218407867401371648_n.jpg?ig_cache_key=MTQzOTI3MDEwNTU0MDA0NjA0Mg%3D%3D.2`}
            media={`http://vjs.zencdn.net/v/oceans.mp4`}
          />
        </WP_Layout.components.container>
      </section>
    );
  }
}
