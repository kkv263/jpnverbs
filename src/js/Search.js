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
      activePage: 0,
      totalPages: 0
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }

  componentWillMount() {
    var queryName = this.props.match.params.name;
    var queryPage = parseInt(this.props.match.params.page, 10);
    this.setState({
      searchValue: queryName
    });

    axios.get('/api/v1/search/' + queryName + '/' + queryPage)
      .then(data => {
        var entry = [];
        var pages = [];
        if (data.data !== null)
          entry = data.data.docs;
        var numPages = 4;
        var offset = Math.floor((queryPage - 1) / numPages);
        var start = offset*numPages;
        var totalPages = data.data.pages;

        for (var i = start; i < ((start + numPages) > totalPages ? totalPages : (start + numPages)); i++){
          pages.push((i + 1));
        }

        this.setState({
          resultsLength: data.data.total,
          loading:false,
          entry: entry,
          pages: pages,
          activePage: queryPage,
          totalPages: totalPages
        });

      });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handlePage(event) {
    var activePage = this.state.activePage;
    if (event === 'prev') 
      activePage -= 1;
    else if (event === 'next')
      activePage += 1;
    else {
      activePage = event;
    }
    
    window.location.href="/search/" + this.state.searchValue + '/' + activePage;
  }

  handleSubmit(event) {
    event.preventDefault();
    var searchValue = this.state.value;
    axios.get('/api/v1/search/' + searchValue + '/1')
    .then(data => {
      var entry = data.data.docs;
      if (entry.length === 1){
        this.props.history.push("/entry/" + entry[0].kdict[0]);
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
        </ResultsGridWrapper>
        <PaginationContainer noDisplay={this.state.totalPages === 1}>
        <PaginationButton noDisplay={activePage === 1} onClick = {() => this.handlePage('prev')}>‹</PaginationButton>
          {pagesList}
        <PaginationButton noDisplay={activePage === this.state.totalPages} onClick = {() => this.handlePage('next')}>›</PaginationButton>
        </PaginationContainer>
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