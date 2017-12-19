import React, { Component } from 'react';
import { WIWrapper, WordWrapper, SearchBar, WordContainer, 
  WordCell, CellHeader, CellForm, WordTable, Button, 
  WordHeader, WordAttributes, WordTitleWrapper,
  AttributesWrapper, WordDefinition, DefinitionList, 
  Notes, WordFooter, FormWrapper,} from '../styles/WordInstance.style';
import axios from 'axios';

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

  componentWillMount(){
    var query = this.props.match.params.name

    axios.get('/api/v1/entries/' + query)
      .then(data => {
        var entry = data.data[0];
        
        this.setState({
          forms: entry.forms,
          kanji: entry.kdict[0],
          kother: (entry.kdict.slice(1)).concat(entry.hdict.slice(1)),
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
    var searchValue = this.state.value;
    axios.get('/api/v1/entries/' + searchValue)
    .then(data => {
      var entry = data.data;
     
      if (entry.length === 1){
        window.location.href="/entry/" + searchValue;
      }else{
        this.props.history.push("/search/" + searchValue);
      }

      this.setState({
      });

    });
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
      <Notes>{info.misc.map((misc, jndex) => {return (<li>{misc}</li>)})}</Notes>
      <Notes>{info.xref.map((xref) => {return <li>See: {xref.join('・')}</li>})}</Notes>
    </div>
    );

    const otherForms = this.state.kother;
    var length = otherForms.length;
    const otherFormsList = otherForms.map((otherForms, index) =>
    <span key={index}>{otherForms + (length - 1 === index ? '' : '・')}</span>);

    return (
      <WIWrapper>
          <form onSubmit={this.handleSubmit}>
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
              {otherForms.length !== 0 ? (<WordFooter>Alternative Forms: {otherFormsList} </WordFooter>) : null}
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