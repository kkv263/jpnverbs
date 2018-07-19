import React, { Component } from 'react';
import { HomeWrapper, ConjugateWrapper,
         SearchBar, Slogan, Tip, Button,Header} from '../styles/Homepage.style'
import axios from 'axios';

import { connect } from 'react-redux';
import { changeFormValue,toggleLoading } from '../action/searchActions';

import propTypes from 'prop-types';

var prod = 'https://intense-woodland-50358.herokuapp.com'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.changeFormValue(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    var searchValue = this.props.searchValue;
    axios.get(prod + '/api/v1/search/' + searchValue + '/1')
    .then(data => {
      var entry = data.data.docs;
     
      if (entry.length === 1){
        if (entry[0].kdict[0] != null) 
          this.props.history.push("/entry/" + entry[0].kdict[0]);
        else
          this.props.history.push("/entry/" + entry[0].hdict[0]); 
      }else{
        this.props.history.push("/search/" + searchValue + '/1');
      }
    });
  }

  render() {
    return (
      <HomeWrapper>
        <ConjugateWrapper>
        <Header>jVerbs</Header>
        <Slogan>An Online Japanese Verb Conjugator </Slogan>
          <form onSubmit={this.handleSubmit}>
            <label>
              <SearchBar type="text" value={this.props.searchValue} onChange={this.handleChange} placeholder = "Enter a word in English or Japanese..." />
            </label>
            <Button type="submit" value="Search"/>
          </form>
        <Tip>Try searches like: 食べる, たべる, taberu, to eat</Tip>

        </ConjugateWrapper> 
        {/* probably for future releases
        <AboutContainer>
          <AboutSlogan>
          </AboutSlogan>
          <AboutInfoWrapper>
            <AboutItem>
              <AboutTextImage></AboutTextImage>
              <AboutTextHeader>Definition</AboutTextHeader> 
              <AboutTextSubtitle>Define and conjugate words.</AboutTextSubtitle>
            </AboutItem>
            <AboutItem>
              <AboutTextImage></AboutTextImage>
              <AboutTextHeader>Kanji</AboutTextHeader> 
              <AboutTextSubtitle>Provide additional information for Kanji characters.</AboutTextSubtitle> 
            </AboutItem>
            <AboutItem>
              <AboutTextImage></AboutTextImage>
              <AboutTextHeader>Audio</AboutTextHeader> 
              <AboutTextSubtitle>Audio listening and understanding enunciation and pronouciation.</AboutTextSubtitle>
            </AboutItem>
            <AboutItem>
              <AboutTextImage></AboutTextImage>
              <AboutTextHeader>Examples</AboutTextHeader> 
              <AboutTextSubtitle>Sentences to show the word's utility.</AboutTextSubtitle> 
            </AboutItem>
          </AboutInfoWrapper>
        </AboutContainer> */}

      </HomeWrapper>
    );
  }
}

Homepage.propTypes = {
  changeFormValue: propTypes.func.isRequired,
  toggleLoading: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  searchValue: propTypes.string.isRequired,
}

const mapStateToProps = state => ({
  searchValue: state.search.searchValue,
  loading: state.search.loading
});

export default connect(mapStateToProps, {changeFormValue, toggleLoading})(Homepage);