import React, { Component } from 'react';
import { WIWrapper, WordWrapper, SearchBar, WordContainer, 
  WordCell, CellHeader, CellForm, WordTable, Button, 
  WordHeader, WordAttributes, WordTitleWrapper,
  AttributesWrapper, WordDefinition, DefinitionList, 
  Notes, WordFooter, FormWrapper,} from '../styles/WordInstance.style';
import axios from 'axios';
const queryString = require('query-string');

class WordInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      forms: [],
      kanji: '',
      kother: [],
      hira: '',
      info: []
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    var query = this.props.location.search;
    var parsed = queryString.parse(query);

    axios.get('/api/v1/entries/' + parsed.value)
      .then(data => {
        var entry = data.data;
        
        this.setState({
          forms: entry.forms,
          kanji: entry.kdict[0],
          kother: entry.kdict.slice(1),
          hira: entry.hdict[0],
          info: entry.info
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

    const forms = this.state.forms;
    const formsList = forms.map ((forms, index) => 
    <WordTable key={index}>
      <WordCell>
        <CellForm>{forms.form}</CellForm>
      </WordCell> 
      <WordCell><CellHeader>Positive</CellHeader></WordCell> 
      <WordCell><CellHeader>Negative</CellHeader></WordCell> 
      <WordCell><CellHeader>Plain</CellHeader></WordCell> 
      <WordCell>
        <p>{forms.plainp}</p>
      </WordCell> 
      <WordCell>
        <p>{forms.plainn}</p>
      </WordCell> 
      <WordCell><CellHeader>Negative</CellHeader></WordCell> 
      <WordCell>
        <p>{forms.politep}</p>
      </WordCell> 
      <WordCell>
        <p>{forms.politen}</p>
      </WordCell> 
    </WordTable>
    ); 

    const info = this.state.info;
    const infoList = info.map ((info,index) => 
    <div key={index}>
      <WordAttributes>{info.pos.join(', ')}</WordAttributes>
      <WordDefinition>{info.definition}</WordDefinition>
      <Notes>{info.misc}</Notes>
    </div>
    );

    const otherForms = this.state.kother;
    var length = otherForms.length;
    const otherFormsList = otherForms.map((otherForms, index) =>
    <span key={index}>{otherForms + (length - 1 === index ? '' : '・')}</span>);

    return (
      <WIWrapper>
          <form action="http://localhost:3001/api/v1/test" method="post" onSubmit={this.handleSubmit}>
            <label>
              <SearchBar type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Enter a word in English or Japanese..." />
            </label>
            <Button type="submit" value="Search"/>
          </form>
        <WordContainer>
          <WordWrapper>
            <WordTitleWrapper>
              <WordHeader Color = "#45B29D">{this.state.kanji}</WordHeader>
              <WordHeader Color = "#3E4E50">{this.state.hira}</WordHeader>
              {otherForms.length !== 0 ? (<WordFooter>Other or Similar : {otherFormsList} </WordFooter>) : null}
            </WordTitleWrapper>
            <AttributesWrapper>
              <DefinitionList>
                {infoList}
              </DefinitionList>
            </AttributesWrapper>
          </WordWrapper>
          <FormWrapper>
            {formsList}
          </FormWrapper>
        </WordContainer>
      </WIWrapper> 
    );
  }
}

export default WordInstance;