import React, { Component } from 'react';
import { HomeWrapper, SearchBar, Slogan, Tip, Button } from '../styles/Homepage.style'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <HomeWrapper>
      <Slogan>Conjugate Japanese verbs with ease.</Slogan>
        <form onSubmit={this.handleSubmit}>
          <label>
            <SearchBar type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Enter a verb in English or Japanese..." />
          </label>
          <Button type="submit" value="Conjugate"/>
        </form>
      <Tip>Try popular searches like: する, 食べる, 読む</Tip>
      </HomeWrapper> 
    );
  }
}

export default Homepage;