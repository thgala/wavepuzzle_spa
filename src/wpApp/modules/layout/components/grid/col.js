import { LG, MD, XSS } from './../../constants';

import React from "react";
import bem from 'react-bem-classes';

const
  w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0];


@bem({
  block: 'col',
  modifiers: ['alignCenter', 'flexDirectionColumn', 'justifyCenter']
})
class Col extends React.Component{

  constructor(props){
    super(props)
    this.columnWidthCalculator = this.columnWidthCalculator.bind(this)
    this.state = {
      width: 0
    }
  }

  componentDidMount(){
    this.columnWidthCalculator()
    window.addEventListener('resize', this.columnWidthCalculator)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.columnWidthCalculator)
  }

  columnWidthCalculator(){
    const
      { mobile, desktop, cols, width } = this.props,
      winWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    if(!!mobile && winWidth >= XSS && winWidth <= MD){
      return this.setState({
        width: mobile
      })
    } else if(!!desktop && winWidth > MD && winWidth <= LG){
      return this.setState({
        width: desktop
      })
    } else {
      return this.setState({
        width: 100 / cols * width
      })
    }
  }

  orderCalculator(){
    return this.props.order
  }

  render(){
    const
      styles = {
        width: `${this.state.width}%`,
        order: this.orderCalculator()
      }
      
    return(
      <div className={this.block()} style={styles}>
        {this.props.children}
      </div>
    )
  }
}

export default Col;