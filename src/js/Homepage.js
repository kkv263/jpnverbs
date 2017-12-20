import React, { Component } from 'react';
import { HomeWrapper, ConjugateWrapper,
         SearchBar, Slogan, Tip, Button,
         } from '../styles/Homepage.style'
import axios from 'axios';

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
    var searchValue = this.state.value;
    axios.get('/api/v1/entries/' + searchValue + '/1')
    .then(data => {
      var entry = data.data.docs;

     
      if (entry.length === 1){
        this.props.history.push("/entry/" + searchValue);
      }else{
        this.props.history.push("/search/" + searchValue + '/1');
      }

      this.setState({
      });

    });
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
            <Button type="submit" value="Search"/>
          </form>
        <Tip>Try popular searches like: 飲む, 食べる, 読む</Tip>

        </ConjugateWrapper> 
      </HomeWrapper>
    );
  }
}

export default Homepage;