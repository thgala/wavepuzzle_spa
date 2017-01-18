import WP_Layout from 'wpApp/modules/layout';
import * as braintreeActions from './../../actions';

import './index.scss';

import React, { Component } from 'react';
import bem from 'react-bem-classes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BrainTree from 'braintree-web';


@connect(
  state => ({
    braintreeFetching: state.braintree.fetching,

    braintreeMain: state.braintree.main,
    braintreePaypal: state.braintree.paypal
  }),
  dispatch => ({
    braintreeActions: bindActionCreators(braintreeActions, dispatch)
  })
)
@bem({
  block: 'checkoutBraintreePaypal'
})
export default class CheckoutBraintreePaypal extends Component {

  constructor(props) {
    super(props);
    
    this.init = this.init.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    const
      { braintreeMain } = this.props;

    if(braintreeMain.instance !== null) this.init()
  }

  init() {
    const
      { braintreeMain } = this.props,
      { braintreeActions } = this.props;

    braintreeActions.startFetching();
    BrainTree.paypal.create({
      client: braintreeMain.instance
    }, (err, instance) => {
      braintreeActions.stopFetching();
      braintreeActions.setPaypalData({
        err,
        instance
      })
    });
  }

  submit(event) {
    const
      { braintreePaypal, braintreeActions } = this.props;
   
    braintreeActions.startFetching();
    braintreePaypal.instance.tokenize({
      flow: 'vault',
    }, function (err, payload) {

      braintreeActions.stopFetching();
      if (err) { console.error(err); } else {
        console.log('Paypal payload:', payload)
      }
    });
  }

  render() {
    const
      { braintreeFetching, braintreeMain, braintreePaypal } = this.props,
      readyCondition = (
        braintreeMain.instance !== null &&
        braintreePaypal.instance !== null
      );

    return readyCondition && (
      <div className={this.block()}>
        <WP_Layout.components.button
          tk="add Paypal"
          loading={braintreeFetching}
          onClick={this.submit}
          paypal
          className={this.element('button')}
        />
      </div>
    );
  }
}
