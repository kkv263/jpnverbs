import React, { Component } from 'react';
import { HomeWrapper, ConjugateWrapper,
         SearchBar, Slogan, Tip, Button, AboutSlogan,
         AboutWrapper, AboutItem, AboutTextHeader, AboutTextImage, 
         AboutTextSubtitle, AboutInfoWrapper, AboutContainer, Header} from '../styles/Homepage.style'
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
    axios.get('/api/v1/search/' + searchValue + '/1')
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

      this.setState({
      });

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
              <SearchBar type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Enter a word in English or Japanese..." />
            </label>
            <Button type="submit" value="Search"/>
          </form>
        <Tip>Try searches like: 飲む, 食べる, 読む</Tip>

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

export default Homepage;