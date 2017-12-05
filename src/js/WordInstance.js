import React, { Component } from 'react';
import { WIWrapper, WordWrapper, SearchBar, WordContainer, 
  ExtraWrapper, WordCell, CellHeader, CellForm, WordTable,
  Button, WordHeader, WordAttributes, WordTitleWrapper } from '../styles/WordInstance.style';

class WordInstance extends Component {
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
  }

  render() {
    return (
      <WIWrapper>
          <form onSubmit={this.handleSubmit}>
            <label>
              <SearchBar type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Enter a verb in English or Japanese..." />
            </label>
            <Button type="submit" value="Conjugate"/>
          </form>
        <WordContainer>
          <WordWrapper>
            <WordTitleWrapper>
              <WordHeader Color = "#45B29D"><ruby>食べる<rt style={{fontSize: '.3em'}}>たべる</rt></ruby></WordHeader>
              <WordHeader Color = "#3E4E50">taberu (to eat)</WordHeader>
              <WordAttributes>Class: 2 Ichidan</WordAttributes>
              <WordAttributes>て-form: 食べて</WordAttributes>
              <WordAttributes>Stem: 食べ</WordAttributes>
              <WordAttributes>Infinitive: 食べ</WordAttributes>
            </WordTitleWrapper>
            <WordTable>
              <WordCell>
                <CellForm>Present</CellForm>
              </WordCell> 
              <WordCell>
                <CellHeader>Positive</CellHeader>
              </WordCell> 
              <WordCell>
                <CellHeader>Negative</CellHeader>
              </WordCell> 
              <WordCell>
                <CellHeader>Plain</CellHeader>
              </WordCell> 
              <WordCell>
                <p>taberu</p>
                <p>食べる</p>
              </WordCell> 
              <WordCell>
                <p>tabenai</p>
                <p>食べない</p>
              </WordCell> 
              <WordCell>
                <CellHeader>Negative</CellHeader>
              </WordCell> 
              <WordCell>
                <p>tabemasu</p>
                <p>食べます</p>
              </WordCell> 
              <WordCell>
                <p>tabemasen</p>
                <p>食べません</p>
              </WordCell> 
            </WordTable>
            
          </WordWrapper>
          <ExtraWrapper>
          </ExtraWrapper>
        </WordContainer>
      </WIWrapper> 
    );
  }
}

export default WordInstance;