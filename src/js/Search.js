import React, { Component } from 'react';
import { SearchContainer, SearchTitleWrapper, SearchBar, Button,
    ResultsGridWrapper, ResultsLeft, ResultsRight, ResultsItem, 
    WordDefinition, WordAttributes, LinkText, ResultsText, PaginationContainer, 
    BottomContainer, PaginationButton, HomeLogo} from '../styles/Search.style';
import axios from "axios";
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { changeFormValue, changeQueryValue } from '../action/searchActions';
import { changeActivePage, resetPages, addPages, setResultLength, setTotalPages } from '../action/pageActions';

import propTypes from 'prop-types';

const prod = 'https://intense-woodland-50358.herokuapp.com';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      entry: [],
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }

  componentDidMount() {
    let queryName = this.props.match.params.name;
    let queryPage = parseInt(this.props.match.params.page, 10);

    this.props.changeQueryValue(queryName);

    axios.get(prod + '/api/v1/search/' + queryName + '/' + queryPage)
      .then(data => {

        var entry = [];
        if (data.data !== null)
          entry = data.data.docs;
        let numPages = 4;
        let offset = Math.floor((queryPage - 1) / numPages);
        let start = offset*numPages;
        let totalPages = data.data.pages;

        this.props.resetPages();
        this.props.setResultLength(data.data.total)
        this.props.setTotalPages(totalPages);

        for (let i = start; i < ((start + numPages) > totalPages ? totalPages : (start + numPages)); i++){
          this.props.addPages(this.props.pages, i+1);
        }

        this.props.changeActivePage(queryPage);
        

        this.setState({
          loading:false,
          entry: entry,
        });

      });
  }

  handleChange(event) {
    this.props.changeFormValue(event.target.value)
  }

  handlePage(event) {
    let activePage = this.props.activePage;
    if (event === 'prev') 
      activePage -= 1;
    else if (event === 'next')
      activePage += 1;
    else {
      activePage = event;
    }
    window.location.href="/search/" + this.props.queryValue + '/' + activePage;
  }

  handleSubmit(event) {
    event.preventDefault();
    var searchValue = this.props.searchValue;
    axios.get(prod + '/api/v1/search/' + searchValue + '/1')
    .then(data => {
      var entry = data.data.docs;
      console.log(entry);
      if (entry.length === 1){
        if (entry[0].kdict[0] != null) 
          this.props.history.push("/entry/" + entry[0].kdict[0]);
        else
          this.props.history.push("/entry/" + entry[0].hdict[0]); 
      }else{
        window.location.href="/search/" + searchValue + '/1';
      }
    });
  }

  render() {
    let searchValue = this.props.queryValue;
    let resultsLength = this.props.resultsLength;
    let pages = this.props.pages;
    let activePage = this.props.activePage;

    const pagesList = pages.map((page,index) =>
      <PaginationButton key={index} onClick = {() => this.handlePage(page)} active={page === activePage}>{page}</PaginationButton>
    );

    const entry = this.state.entry;
    const entriesList = entry.map ((entry, index) => 
    <ResultsItem key={index}>
      <ResultsLeft>{(entry.kdict[0] ? entry.kdict[0] : entry.hdict[0])} 
        <Link onClick = {() => this.sendFreq(entry.kdict[0] ? entry.kdict[0] : entry.hdict[0])} style={{ textDecoration: 'none' }} to={"/entry/" + (entry.kdict[0] ? entry.kdict[0] : entry.hdict[0])}><LinkText>see more...▸</LinkText></Link>
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
        <Link to={"/"}><HomeLogo>jVerbs</HomeLogo></Link>
          <form onSubmit={this.handleSubmit}>
            <label>
              <SearchBar type="text" value={this.props.searchValue} onChange={this.handleChange} placeholder = "Enter a word in English or Japanese..." />
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
        <PaginationContainer noDisplay={this.props.totalPages === 1}>
        <PaginationButton noDisplay={activePage === 1} onClick = {() => this.handlePage('prev')}>‹</PaginationButton>
          {pagesList}
        <PaginationButton noDisplay={activePage === this.props.totalPages} onClick = {() => this.handlePage('next')}>›</PaginationButton>
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

Search.propTypes = {
  addPages: propTypes.func.isRequired,
  changeFormValue: propTypes.func.isRequired,
  changeQueryValue: propTypes.func.isRequired,
  changeActivePage: propTypes.func.isRequired,
  resetPages: propTypes.func.isRequired,
  setResultLength: propTypes.func.isRequired,
  setTotalPages: propTypes.func.isRequired,
  searchValue: propTypes.string.isRequired,
  queryValue: propTypes.string.isRequired,
  activePage: propTypes.number.isRequired,
  pages: propTypes.array.isRequired,
  resultsLength: propTypes.number.isRequired,
  totalPages: propTypes.number.isRequired
}

const mapStateToProps = state => ({
  searchValue: state.search.searchValue,
  queryValue: state.search.queryValue,
  activePage: state.page.activePage,
  pages: state.page.pages,
  resultsLength: state.page.resultsLength,
  totalPages: state.page.totalPages
});

export default connect(mapStateToProps, {changeFormValue, changeQueryValue, 
  changeActivePage, resetPages, addPages, setResultLength, setTotalPages})(Search);
