import { LG, MD, SM, XS, XSS } from "./../../constants";
import './index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import bem from 'react-bem-classes';


@bem({
  block: 'responsiveGrid',
})
export default class Responsive extends Component {

  constructor(props){
    super(props)
    this.calculateItemWidth = this.calculateItemWidth.bind(this)
    this.isItemLastInRow = this.isItemLastInRow.bind(this)
    this.state = {
      currentItemsInRow: 0,
      itemWidth: 0
    }
  }

  componentDidMount(){
    this.calculateItemWidth()
    window.addEventListener('resize', this.calculateItemWidth)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.calculateItemWidth)
  }

  isItemLastInRow(i){
    const
      calculator = (i+1) / Number(this.state.currentItemsInRow)

    return calculator - Math.floor(calculator) === 0
  }

  calculateItemWidth(){
    let
      {itemsInRow} = this.props,
      fullWidth = 100,
      itemWidth = 0,
      currentItemsInRow = 0,
      windowWidth = window.innerWidth

    if(windowWidth >= LG){
      itemWidth = fullWidth/itemsInRow.lg
      currentItemsInRow = itemsInRow.lg
    } else if(windowWidth >= MD && windowWidth < LG){
      itemWidth = fullWidth/itemsInRow.md
      currentItemsInRow = itemsInRow.md
    } else if(windowWidth >= SM && windowWidth < MD){
      itemWidth = fullWidth/itemsInRow.sm
      currentItemsInRow = itemsInRow.sm
    } else if(windowWidth < SM){
      itemWidth = fullWidth/itemsInRow.xs
      currentItemsInRow = itemsInRow.xs
    }

    this.setState({
      itemWidth: itemWidth,
      currentItemsInRow: currentItemsInRow
    })
  }

  render(){
    return(
      <div className={this.block()}>
        {React.Children.map(this.props.children, (child, i) => {
          return React.cloneElement(child, Object.assign({}, this.props, {
            lastInRow: this.isItemLastInRow(i),
            style: {
              width: `${this.state.itemWidth}%`
            }
          }))
        })}
      </div>
    )
  }
}