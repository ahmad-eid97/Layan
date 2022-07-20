import { Component } from "react"

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    document.querySelector("body").scrollTo(0,0)
  }

  render() {
    return this.props.children
  }
}

export default ScrollToTop