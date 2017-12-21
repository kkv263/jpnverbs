import React, { Component } from 'react';
import { SearchContainer, SearchTitleWrapper, SearchBar, Button,
    ResultsGridWrapper, ResultsLeft, ResultsRight, ResultsItem, 
    WordDefinition, WordAttributes, LinkText, ResultsText, PaginationContainer, 
    BottomContainer, PaginationButton} from '../styles/Search.style';
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
      pages: [],
      activePage: '',
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
        var entry = [];
        var pages = [];
        if (data.data !== null)
          entry = data.data.docs;

        for (var i = 1; i < data.data.pages + 1; i++){
          pages.push(i + '');
        }

        this.setState({
          resultsLength: data.data.total,
          loading:false,
          entry: entry,
          pages: pages,
          activePage: queryPage
        });

      });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handlePage(event) {
    window.location.href="/search/" + this.state.searchValue + '/' + event;
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
    var pages = this.state.pages;
    var activePage = this.state.activePage;

    const pagesList = pages.map((page,index) =>
      <PaginationButton key={index} onClick = {() => this.handlePage(page)} active={page === activePage}>{page}</PaginationButton>
    );

    const entry = this.state.entry;
    const entriesList = entry.map ((entry, index) => 
    <ResultsItem key={index}>
      <ResultsLeft>{(entry.kdict[0] ? entry.kdict[0] : entry.hdict[0])} 
        <Link to={"/entry/" + (entry.kdict[0] ? entry.kdict[0] : entry.hdict[0])}><LinkText>see more...▸</LinkText></Link>
      </ResultsLeft>
      <ResultsRight>
        <ol>
          {(entry.info).map((info, jndex) => {return (<div key={jndex}>
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
        (<BottomContainer>
          <ResultsGridWrapper>
          <ResultsText>「 {searchValue} 」 - {resultsLength} similar results found:</ResultsText>
          {entriesList}
        <PaginationContainer>
          {pagesList}
        </PaginationContainer>
        </ResultsGridWrapper>
        </BottomContainer>) : 
        (<BottomContainer >
          <ResultsText center>Sorry! It looks like we were not able to find results for「 {searchValue} 」,</ResultsText>
          <ResultsText center weight>Be sure to check your spelling, and try a different search. </ResultsText>
        </BottomContainer>)}
        
      </SearchContainer>)
    );
  }
}

export default Search;