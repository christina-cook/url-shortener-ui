import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title !== '' && this.state.urlToShorten !== '') {
      const newUrl = {
        long_url: this.state.urlToShorten,
        title: this.state.title
      }
      this.props.addNewUrl(newUrl)
    } else {
      alert('Please enter a title and url.')
    }
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form className='url-form'>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
          className='title-input'
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
          className='url-input'
        />

        <button onClick={e => this.handleSubmit(e)} className='form-submit'>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
