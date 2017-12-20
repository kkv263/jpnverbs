import React, { Component } from 'react';
import { SearchContainer, SearchTitleWrapper, SearchBar, Button,
    ResultsGridWrapper, ResultsLeft, ResultsRight, ResultsItem, 
    WordDefinition, WordAttributes, LinkText, ResultsText} from '../styles/Search.style';
import axios from "axios";
import { Link } from 'react-router-dom'


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchValue: '',
      resultsLength: '',
      loading: true,
      entry: [],
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    var queryName = this.props.match.params.name;
    var queryPage = this.props.match.params.page;
    this.setState({
      searchValue: queryName
    });

    axios.get('/api/v1/entries/' + queryName + '/' + queryPage)
      .then(data => {
        var entry = []
        if (data.data !== null)
          entry = data.data.docs;


        this.setState({
          resultsLength: data.data.total,
          loading:false,
          entry: entry
        });

      });
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
        window.location.href="/search/" + searchValue + '/1';
      }

      this.setState({
      });

    });
  }

  render() {
    var searchValue = this.state.searchValue;
    var resultsLength = this.state.resultsLength;
    

    const entry = this.state.entry;
    const entriesList = entry.map ((entry, index) => 
    <ResultsItem key={index}>
      <ResultsLeft>{(entry.kdict[0] ? entry.kdict[0] : entry.hdict[0])} 
        <Link to={"/entry/" + (entry.kdict[0] ? entry.kdict[0] : entry.hdict[0])}><LinkText>see more...▸</LinkText></Link>
      </ResultsLeft>
      <ResultsRight>
        <ol>
          {(entry.info).map((info, jndex) => {return (<div>
          <WordAttributes>{info.pos.join(', ')}</WordAttributes>
          <WordDefinition>{info.definition}</WordDefinition>
          </div>)})}
        </ol>
      </ResultsRight>
    </ResultsItem>
    ); 


    return (
      this.state.loading ? null : (<SearchContainer>
        <SearchTitleWrapper>
          <form onSubmit={this.handleSubmit}>
            <label>
              <SearchBar type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Enter a word in English or Japanese..." />
            </label>
            <Button type="submit" value="Search"/>
          </form>
        </SearchTitleWrapper>
        {entry.length !== 0 ?         
        (<ResultsGridWrapper>
          <ResultsText>「 {searchValue} 」 - {resultsLength} similar results found:</ResultsText>
          {entriesList}
        </ResultsGridWrapper>) : 
        (<div style ={{marginTop: "50px"}}>
          <ResultsText center>Sorry! It looks like we were not able to find results for「 {searchValue} 」,</ResultsText>
          <ResultsText center weight>Be sure to check your spelling, and try a different search. </ResultsText>
        </div>)}

      </SearchContainer>)
    );
  }
}

export default Search;