import React, { Component } from 'react'
import { WIWrapper, WordWrapper, SearchBar, WordContainer, 
  Button, WordHeader, WordTitleWrapper,
  WordFooter, SubtitleHeader, Tab, 
  Footer, FooterContainter, FooterText, HomeLogo, 
  SearchForm, BaseHeader} from '../styles/WordInstance.style';

import { Link } from 'react-router-dom'
import { SKText } from '../styles/Skeleton.style';

export default class WordInstanceSkeleton extends Component {
  render() {
    return (
      <div>
        <WIWrapper>
        <BaseHeader>
          <Link style={{ textDecoration: 'none' }} to={"/"}><HomeLogo>jVerbs</HomeLogo></Link>
          <SearchForm onSubmit={this.handleSubmit}>
            <label>
              <SearchBar type="text" value={this.props.searchValue} onChange={this.handleChange} placeholder = "Enter a word in English or Japanese..." />
            </label>
            <Button type="submit" value="Search"/>
          </SearchForm>
        </BaseHeader>
        <WordContainer>
          <WordWrapper>
              <WordTitleWrapper>
                <WordHeader ><SKText w="400px" h="60px"/></WordHeader>
                <WordHeader ><SKText w="450px" h="60px" mt="2.5%"/></WordHeader>
                <WordFooter> <SKText w="200px" h="25px" mt="1%"/></WordFooter>
                <WordFooter> <SKText w="300px" h="25px" mt="1%"/></WordFooter>
              </WordTitleWrapper>
              <Tab>
                <SubtitleHeader><SKText w="150px" h="40px" mt="2%" mb="4%"/> </SubtitleHeader>
                <SubtitleHeader><SKText w="150px" h="40px" mt="2%" mb="4%"/> </SubtitleHeader>
              </Tab>
              <SKText w="450px" h="30px" mt="2%"/>
              <SKText w="400px" h="30px" mt="2%"/>
              <SKText w="425px" h="30px" mt="2%"/>
              <SKText w="325px" h="30px" mt="2%"/>
          </WordWrapper>
        </WordContainer>

        <Footer>
          <FooterContainter>
            <FooterText>
            This site uses the EDICT and KANJIDIC dictionary files. These files are the property of the Electronic Dictionary Research and Development Group, and are used in conformance with the Group's licence.
            </FooterText>
          </FooterContainter>
        </Footer>
      </WIWrapper>
      </div>
    )
  }
}
