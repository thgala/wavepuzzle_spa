import './grid.scss';
import React from "react";

import bem from 'react-bem-classes';

@bem({
  block: 'row'
})
class Row extends React.Component{

  render(){
    return(
      <div className={this.block()}>
        {
          React.Children.map(this.props.children, (child, i) => {
            return React.cloneElement(child, {
              cols: this.props.cols.reduce((a, b) => a + b),
              width: this.props.cols[i],
              order: this.props.order
            })
          })
        }
      </div>
    )
  }
}

export default Row;