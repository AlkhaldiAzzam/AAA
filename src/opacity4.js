import React from 'react'
import PropTypes from 'prop-types'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


class Fade4 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      opacity: this.props.in ? 0 : 1
    }

    this.fade = () => {
      let { opacity } = this.state
      const { interval, onFadeComplete } = this.props

      var timer = setInterval(() => {
        if (opacity <= 0.1) {
          this.setState({opacity: 0})
          clearInterval(timer)
          if (onFadeComplete) { // custom callback
            onFadeComplete()
          }
        } else {
          opacity -= opacity * 0.1
          this.setState({opacity})
        }
      }, interval)
    }

    this.unfade = () => {
      let { opacity } = this.state
      const { interval, onFadeComplete } = this.props

      var timer = setInterval(() => {
        if (opacity >= 1) {
          this.setState({opacity: 1})
          clearInterval(timer)
          if (onFadeComplete) { // custom callback
            onFadeComplete()
          }
        } else {
          if (opacity === 0) {
            opacity = 0.1
          }
          opacity += opacity * 0.1
          this.setState({opacity})
        }
      }, interval)
    }
  }
  componentDidMount() {
    const { delay } = this.props

    sleep(delay).then(() => { // wait the delay before starting animation
      if (this.props.in) {
        this.unfade()
      } else {
        this.fade()
      }
    })
  }

  render() {
    const { opacity } = this.state
    const { children } = this.props

    return React.cloneElement(children, {
      style: {opacity}
    })
  }
}

Fade4.propTypes = {
  in: PropTypes.bool,
  interval: PropTypes.number,
  delay: PropTypes.number,
  chidlren: PropTypes.node,
  onFadeComplete: PropTypes.func
}

Fade4.defaultProps = {
  in: false,
  interval: 10000,
  delay: 17000
  // interval: 400,
  // delay: 10

}
 export default Fade4
