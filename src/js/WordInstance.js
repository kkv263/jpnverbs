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

    const forms = [ 
    { form: 'Present' ,
      rplainp:'taberu',
      hplainp:'食べる',
      rplainn:'tabenai',
      hplainn:'食べない',
      rpolitep: 'tabemasu',
      hpolitep: '食べます',
      rpoliten: 'tabemasen',
      hpoliten: '食べません' 
    }, 
    { form: 'Past',
      rplainp:'tabeta',
      hplainp:'食べた',
      rplainn:'tabenakatta',
      hplainn:'食べなかった',
      rpolitep: 'tabemashita',
      hpolitep: '食べました',
      rpoliten: 'tabemasendeshita',
      hpoliten: '食べませんでした'       
    }, 
  { form: 'Imperative',
    rplainp:'tabero',
    hplainp:'食べろ',
    rplainn:'taberu na',
    hplainn:'食べるな',
    rpolitep: 'tabete kudasai',
    hpolitep: '食べてください',
    rpoliten: 'tabenai de kudasai',
    hpoliten: '食べないでください'  


  } ];

    const formsList = forms.map ( (forms) => 
    <WordTable>
      <WordCell>
        <CellForm>{forms.form}</CellForm>
      </WordCell> 
      <WordCell><CellHeader>Positive</CellHeader></WordCell> 
      <WordCell><CellHeader>Negative</CellHeader></WordCell> 
      <WordCell><CellHeader>Plain</CellHeader></WordCell> 
      <WordCell>
        <p>{forms.rplainp}</p>
        <p>{forms.hplainp}</p>
      </WordCell> 
      <WordCell>
        <p>{forms.rplainn}</p>
        <p>{forms.hplainn}</p>
      </WordCell> 
      <WordCell><CellHeader>Negative</CellHeader></WordCell> 
      <WordCell>
        <p>{forms.rpolitep}</p>
        <p>{forms.hpolitep}</p>
      </WordCell> 
      <WordCell>
        <p>{forms.rpoliten}</p>
        <p>{forms.hpoliten}</p>
      </WordCell> 
    </WordTable>
    
    ); 

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
              <WordHeader Color = "#45B29D"><ruby>食べる<rt style={{fontSize: '.4em'}}>たべる</rt></ruby></WordHeader>
              <WordHeader Color = "#3E4E50">taberu (to eat)</WordHeader>
              <WordAttributes>Class: 2 Ichidan</WordAttributes>
              <WordAttributes>て-form: 食べて</WordAttributes>
              <WordAttributes>Stem: 食べ</WordAttributes>
              <WordAttributes>Infinitive: 食べ</WordAttributes>
            </WordTitleWrapper>
            {formsList}
            
          </WordWrapper>
          <ExtraWrapper>
          </ExtraWrapper>
        </WordContainer>
      </WIWrapper> 
    );
  }
}

export default WordInstance;