import * as WP_LayoutSelectors from './../../selectors';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


@connect(
  createStructuredSelector({
    textFields: WP_LayoutSelectors.textFields
  })
)
export default class GG_Text extends Component {

  findValueByKey(){
    const
      { textFields, slug } = this.props;

    return textFields.find((tf) => tf.slug === slug)
  }

  render() {
    const
      { slug } = this.props,
      textField = this.findValueByKey();

    return textField ? (
      <div dangerouslySetInnerHTML={{
        __html: textField.text
      }} />
    ) : (
      <div>Textfield - {slug} - is empty</div>
    )
  }
}
