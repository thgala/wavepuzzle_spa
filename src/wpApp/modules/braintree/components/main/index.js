import * as braintreeActions from './../../actions';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BrainTree from 'braintree-web';


@connect(
  state => ({
    braintreeFetching: state.braintree.fetching
  }),
  dispatch => ({
    braintreeActions: bindActionCreators(braintreeActions, dispatch)
  })
)
export default class CheckoutBraintree extends Component {

  componentDidMount() {
    const
      { braintreeActions } = this.props;

    braintreeActions.startFetching()
    BrainTree.client.create({
      authorization: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI3Y2RmOWVhOGYxZWY0MjZkMGJhZjczZGNiMDg4NTlmZGRjNWIyNDU1YmRkMzc0MmJmOTlkYjY5YTVkZDBkYjEyfGNyZWF0ZWRfYXQ9MjAxNi0xMi0wN1QxNTo0MDozMi41NDMwODgyNTcrMDAwMFx1MDAyNm1lcmNoYW50X2lkPWM2djVuenB0OGh2bnhuemdcdTAwMjZwdWJsaWNfa2V5PTl5Y3o0NG1neWtjenA4OWMiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvYzZ2NW56cHQ4aHZueG56Zy9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbInBvc3RhbF9jb2RlIl0sImVudmlyb25tZW50Ijoic2FuZGJveCIsImNsaWVudEFwaVVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9jNnY1bnpwdDhodm54bnpnL2NsaWVudF9hcGkiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL2NsaWVudC1hbmFseXRpY3Muc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbS9jNnY1bnpwdDhodm54bnpnIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6ImJ5ZWJ1eSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6Ikdyb3Zlci1TdGFnaW5nLUFjdGl2ZSIsImN1cnJlbmN5SXNvQ29kZSI6IkVVUiJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiYzZ2NW56cHQ4aHZueG56ZyIsInZlbm1vIjoib2ZmIn0'
    }, (err, instance) => {

      braintreeActions.stopFetching()
      braintreeActions.setMainData({
        err,
        instance
      })
    });
  }

  render() {
    return this.props.braintreeFetching === null ? null
      : this.props.children
  }
}
