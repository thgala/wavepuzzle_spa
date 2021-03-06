import WP_Layout from 'wpApp/modules/layout';
import WP_Router from 'wpApp/modules/router';

import isObjEqual from 'lodash.isequal';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

/* global styles for app */
import 'reset-css/reset.css';
import './styles/app.scss';


@connect(
  // createStructuredSelector({
  //   user: ggAuth.selectors.user,
  //   storeActive: ggStore.selectors.storeActive,
  //   paramStorecode: WP_Router.selectors.paramsStore,
  // }),
  state => ({}),
  dispatch => ({
    layoutActions: bindActionCreators(WP_Layout.actions, dispatch)
  })
)
export default class App extends Component {

  componentDidMount() {
    const
     { layoutActions } = this.props;

    layoutActions.getTextFields()
  }

  render() {
    return (
      <section>
        {this.props.children}
        <WP_Layout.components.globalLoader />
      </section>
    )

  }

}
