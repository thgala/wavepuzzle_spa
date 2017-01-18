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
    braintreeCreditcard: state.braintree.creditCard
  }),
  dispatch => ({
    braintreeActions: bindActionCreators(braintreeActions, dispatch)
  })
)
@bem({
  block: 'checkoutBraintreeCreditcard'
})
export default class CheckoutBraintreeCreditcard extends Component {

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
      { braintreeActions } = this.props,
      { braintreeMain } = this.props;

    braintreeActions.startFetching();
    BrainTree.hostedFields.create({
      client: braintreeMain.instance,
      styles: {
        'input': {
          'font-size': '16px',
          'font-family': 'monospace'
        }
      },
      fields: {
        number: {
          selector: '#braintreeCardNumber',
          placeholder: '4111 1111 1111 1111'
        },
        expirationDate: {
          selector: '#braintreeExpirationDate',
          placeholder: 'MM / YYYY'
        },
        cvv: {
          selector: '#braintreeCvv',
          placeholder: '123'
        }
      }
    }, (err, instance) => {
      braintreeActions.stopFetching();
      braintreeActions.setCreditcardData({
        err,
        instance
      });
    });
  }

  submit(event) {
    const
      { braintreeCreditcard, braintreeActions } = this.props;
   
    braintreeActions.startFetching();
    braintreeCreditcard.instance.tokenize((err, payload) => {
      braintreeActions.stopFetching();

      if (err) { console.error(err); } else {
        console.log('Creditcard payload:', payload)
      }
    });
  }

  render() {
    const
      { braintreeFetching, braintreeMain, braintreeCreditcard } = this.props,
      readyCondition = braintreeCreditcard.instance !== null;

    return braintreeMain.instance === null ? null : (
      <div className={this.block({
        hide: !readyCondition
      })}>
        <div className={this.element('wrap')}>
          <div className={this.element('box')}>
            <div className={this.element('label')}>Card number:</div>
            <div
              id="braintreeCardNumber"
              className={this.element('input')}
            />
          </div>
          <div className={this.element('box')}>
            <div className={this.element('label')}>Expiration date:</div>
            <div
              id="braintreeExpirationDate"
              className={this.element('input')}
            />
          </div>
          <div className={this.element('box')}>
            <div className={this.element('label')}>Card CVV:</div>
            <div
              id="braintreeCvv"
              className={this.element('input')}
            />
          </div>

          {readyCondition && (
            <WP_Layout.components.button
              tk="submit"
              loading={braintreeFetching}
              onClick={this.submit}
              className={this.element('button')}
            />
          )}
        </div>
      </div>
    );
  }
}
