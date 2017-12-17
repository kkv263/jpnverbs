import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { HomeWrapper, ConjugateWrapper,
         SearchBar, Slogan, Tip, Button,
         } from '../styles/Homepage.style'

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
        <ConjugateWrapper>
        <Slogan>An Online Japanese Verb Conjugator </Slogan>
          <form onSubmit={this.handleSubmit}>
            <label>
              <SearchBar type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Enter a word in English or Japanese..." />
            </label>
            <Link to={'/search?value=' + this.state.value}><Button type="submit" value="Search"/></Link>
          </form>
        <Tip>Try popular searches like: 飲む, 食べる, 読む</Tip>

        </ConjugateWrapper> 
      </HomeWrapper>
    );
  }
}

export default Homepage;