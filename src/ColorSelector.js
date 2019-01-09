import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      // update makeColorSwatches to provide the <div>s it is rendering with some way to fire off
      //that method we wrote for Matrix
      const obtenerSwatchColor = () => {return this.props.ponerColorSeleccionado(str)}
      return <div key={idx} data-color={str} onClick={obtenerSwatchColor} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}



////////////////
