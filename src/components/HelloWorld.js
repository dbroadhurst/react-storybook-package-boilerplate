import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = {
  frame: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '256px',
    height: '256px',
    backgroundColor: 'rgb(240,240,240)',
    boxShadow: '5px 5px 10px rgb(128,128,128)'
  },
  message: {
    fontSize: '28px'
  }
}

export default class HelloWorld extends Component {
  static propTypes = {
    message: PropTypes.string
  }

  render() {
    const { message } = this.props
    console.log(message)

    return (
      <div style={style.frame}>
        <div style={style.message}>{message}</div>
      </div>
    )
  }
}
