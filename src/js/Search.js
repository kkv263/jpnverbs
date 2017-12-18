import React, { Component } from 'react';
import { SearchContainer, SearchTitleWrapper, SearchBar, Button,
    NumberFound, ResultsGridWrapper, ResultsLeft, ResultsRight,
    ResultsItem, WordDefinition, WordAttributes, LinkText} from '../styles/Search.style';
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
    var query = this.props.match.params.name

    this.setState({
      searchValue: query
    });

    axios.get('/api/v1/entries/' + query)
      .then(data => {
        var entry = data.data;

        console.log(entry[0].info[0].definition);
        
        this.setState({
          resultsLength: entry.length,
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
  }

  render() {
    var searchValue = this.state.searchValue;
    var resultsLength = this.state.resultsLength;
    

    const entry = this.state.entry;
    const entriesList = entry.map ((entry, index) => 
    <ResultsItem key={index}>
      <ResultsLeft>{(entry.kdict[0] ? entry.kdict[0] : entry.hdict[0])} 
        <Link to={"/entry/" + (entry.kdict[0] ? entry.kdict[0] : entry.hdict[0])}><LinkText>see conjugations▸</LinkText></Link>
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
        <NumberFound>{resultsLength} results found for "{searchValue}"</NumberFound>
          <form onSubmit={this.handleSubmit}>
            <label>
              <SearchBar type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Enter a word in English or Japanese..." />
            </label>
            <Button type="submit" value="Search"/>
          </form>
        </SearchTitleWrapper>
        <ResultsGridWrapper>
          {entriesList}
        </ResultsGridWrapper>
      </SearchContainer>)
    );
  }
}

export default Search;