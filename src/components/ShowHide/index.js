// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onClickFirst = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickLast = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="sub-container">
          <div className="button-container1">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirst}
            >
              Show/Hide FirstName
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="button-container2">
            <button type="button" className="button" onClick={this.onClickLast}>
              Show/Hide LastName
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
