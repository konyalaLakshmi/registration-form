// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstErr: false,
    showLastErr: false,
    isSubmit: false,
  }

  onBlurLast = () => {
    const isValidateLast = this.validateLastName()
  }

  onChangeLast = event => {
    this.setState({lastName: event.target.value})
  }

  renderLast = () => {
    const {lastName, showLastErr} = this.state
    const className = showLastErr ? 'name-err-field' : 'name-field'

    return (
      <div className="c">
        <label htmlFor="input2" className="label">
          LAST NAME
        </label>
        <input
          type="text"
          className={className}
          id="input2"
          value={lastName}
          placeholder="Last Name"
          onChange={this.onChangeLast}
          onBlur={this.onBlurFirst}
        />
      </div>
    )
  }

  onBlurFirst = () => {
    const isValidateFirst = this.validateFirstName()
  }

  onChangeFirst = event => {
    this.setState({firstName: event.target.value})
  }

  renderFirst = () => {
    const {firstName, showFirstErr} = this.state
    const className = showFirstErr ? 'name-err-field' : 'name-field'
    return (
      <div className="c">
        <label htmlFor="input1" className="label">
          FIRST NAME
        </label>
        <input
          type="text"
          className={className}
          id="input1"
          value={firstName}
          placeholder="First name"
          onChange={this.onChangeFirst}
          onBlur={this.onBlurLast}
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastName} = this.state

    const isValidate = lastName !== ''

    this.setState({showLastErr: !isValidate})
    return isValidate
  }

  validateFirstName = () => {
    const {firstName} = this.state

    const isValidate = firstName !== ''

    this.setState({showFirstErr: !isValidate})
    return isValidate
  }

  submitForm = event => {
    event.preventDefault()
    const isValidateFirst = this.validateFirstName()
    const isValidateLast = this.validateLastName()
    if (isValidateFirst && isValidateLast) {
      this.setState({isSubmit: true})
    } else {
      this.setState({
        showFirstErr: !isValidateFirst,
        showLastErr: !isValidateLast,
        isSubmit: false,
      })
    }
  }

  renderRegistration = () => {
    const {showFirstErr, showLastErr} = this.state

    return (
      <form onSubmit={this.submitForm}>
        {this.renderFirst()}
        {showFirstErr && <p className="p">Required</p>}
        {this.renderLast()}
        {showLastErr && <p className="p">Required</p>}

        <button type="submit" className="b">
          Submit
        </button>
      </form>
    )
  }

  onClickBtn = () => {
    this.setState(prev => ({
      firstName: '',
      lastName: '',
      isSubmit: !prev.isSubmit,
    }))
  }

  renderSuccess = () => (
    <div className="s">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="img"
        alt="success"
      />
      <p className="para">Submitted Successfully</p>
      <button type="button" className="button" onClick={this.onClickBtn}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmit} = this.state

    return (
      <div className="main-container">
        <h1 className="h">Registration</h1>
        <div className="container">
          {isSubmit ? this.renderSuccess() : this.renderRegistration()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
