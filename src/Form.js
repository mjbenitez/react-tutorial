import React, { Component } from 'react';

class Form extends Component {
  //we need the constructor to receive the props of the parent
  constructor(props) {
    super(props);

    //set the initial state to an object with empty properties
    this.initialState = {
      name: '',
      job: ''
    };
    //assign the initialState to the state
    this.state = this.initialState;
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name] : value
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render () {
    const { name, job } = this.state;

    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange} />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange} />
          <input
            type="button"
            value="Submit"
            onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
