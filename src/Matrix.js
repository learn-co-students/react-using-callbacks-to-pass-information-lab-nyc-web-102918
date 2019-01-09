import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    // provide a way for Matrix to keep track of the selected color (think state!)
    this.state= {
      selectedColor: "#fff"
    }
  }


// consider what should be done with that method once it is written. Who needs it?
// How can we get it to them? Use the skills you already have with React to solve this

// write a method that takes in a single argument of a hex color string (i.e. '#fff') and sets the
// selected color to that
  ponerColorSeleccionado = (color) => {
    // aqui puedo imprimir en la consola el color para verlo
    console.log("selectedColor:", color)
    return this.setState.selectedColor = color
  }

  getSelectedColor = () => {

     console.log("get color vene", this.setState.selectedColor)
     return this.setState.selectedColor
   }

//aqui donde dice Cell le estoy pasando el metodo get para que cuando lo llame en cell lo encuentre
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector ponerColorSeleccionado={this.ponerColorSeleccionado} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
