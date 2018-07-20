import React, { Component } from 'react'
import { SearchTitleWrapper, SearchBar, Button,
  ResultsGridWrapper, ResultsLeft, ResultsRight, ResultsItem, 
  BottomContainer, HomeLogo} from '../styles/Search.style';

import { Link } from 'react-router-dom'
import { SKText } from '../styles/Skeleton.style';

export default class SearchSkeleton extends Component {
  render() {
    return (
      <div>
       <SearchTitleWrapper>
        <Link to={"/"}><HomeLogo>jVerbs</HomeLogo></Link>
          <form onSubmit={this.handleSubmit}>
            <label>
              <SearchBar type="text" value={this.props.searchValue} onChange={this.handleChange} placeholder = "Enter a word in English or Japanese..." />
            </label>
            <Button type="submit" value="Search"/>
          </form>
        </SearchTitleWrapper>
        <BottomContainer>
          <ResultsGridWrapper>
            <SKText w="400px" h="30px"/>
            <ResultsItem>
              <ResultsLeft>
                <SKText w="125px" h="30px"/>
              </ResultsLeft>
              <ResultsRight>
                <SKText w="350px" h="10px" mt="15px"/>
                <SKText w="300px" h="20px" mt="15px"/>
                <SKText w="300px" h="20px" mt="15px"/>
              </ResultsRight>
            </ResultsItem>
            <ResultsItem>
            <ResultsLeft>
                <SKText w="305px" h="30px"/>
              </ResultsLeft>
            <ResultsRight>
                <SKText w="350px" h="10px" mt="15px"/>
                <SKText w="400px" h="20px" mt="15px"/>
                <SKText w="400px" h="20px" mt="15px"/>
              </ResultsRight>
            </ResultsItem>
            <ResultsItem>
            <ResultsLeft>
                <SKText w="300px" h="30px"/>
              </ResultsLeft>
            <ResultsRight>
              <SKText w="350px" h="10px" mt="15px"/>
                <SKText w="400px" h="20px" mt="15px"/>
                <SKText w="400px" h="20px" mt="15px"/>
              </ResultsRight>
            </ResultsItem>
            <ResultsItem>
            <ResultsLeft>
                <SKText w="250px" h="30px"/>
              </ResultsLeft>
            <ResultsRight>
                <SKText w="350px" h="10px" mt="15px"/>
                <SKText w="400px" h="20px" mt="15px"/>
                <SKText w="400px" h="20px" mt="15px"/>
              </ResultsRight>
            </ResultsItem>
          </ResultsGridWrapper>
        </BottomContainer>
      </div>
    )
  }
}
