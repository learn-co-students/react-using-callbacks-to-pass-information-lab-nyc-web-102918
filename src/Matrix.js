import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state={
    colors: chromeBoi, //chromeBoi is array of arrays imported from data.js
    selectedColor: '#FFF'
  }

  selectColor = (color) => { //
    this.setState({
      selectedColor: color
    })
  }

  getSelectedColor = () => (this.state.selectedColor)

  genRow = (vals) => (
      //genRow will take in an array and return a mapped array of Cell component with key and color .
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor}/>)
  )

  genMatrix = () => (
    //when invoked, returns a mapped array of each array within chromeBoi array where each individual array is an arg of genRow.
    this.state.colors.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    // console.log(this.state);
    return (
      <div id="app">
        <ColorSelector selectColor={this.selectColor}/>

        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

// Matrix.defaultProps = {
//   values: chromeBoi
// }
