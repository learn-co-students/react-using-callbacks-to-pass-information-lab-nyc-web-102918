import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
    }
  }

  handleClick = () => { //when you click anywhere, the cell will change color to the color you selected earlier.
    // console.log("Clicking");
    const selectedColor = this.props.getSelectedColor()
    this.setState({
      color: selectedColor
    })
  }

  render() {
    console.log();
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }ß
}
