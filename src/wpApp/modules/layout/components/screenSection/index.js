import './index.scss';

import React, { Component } from 'react';
import bem from 'react-bem-classes';

const
  w = window,
  d = document,
  documentElement = d.documentElement,
  body = d.getElementsByTagName('body')[0];


@bem({
  block: 'screenSection',
  modifiers: ['center']
})
export default class WP_ScreenSection extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      width: 0,
      height: 0
    }

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions(){
    this.setState({
      width: w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height: w.innerHeight|| documentElement.clientHeight|| body.clientHeight
    });
  }

  render() {
    const
      { width, height } = this.state;

    return (
      <div className={this.block()} style={{
        width,
        height
      }}>
        {this.props.children}
      </div>
    );
  }
}
