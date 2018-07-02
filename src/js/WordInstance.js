import React, { Component } from 'react';
import { WIWrapper, WordWrapper, SearchBar, WordContainer, 
  WordCell, CellHeader, CellForm, WordTable, Button, 
  WordHeader, WordAttributes, WordTitleWrapper,
  AttributesWrapper, WordDefinition, Notes, 
  WordFooter, FormWrapper, SubtitleHeader, Tab, 
  FormTitle, Footer, FooterContainter, FooterText, HomeLogo} from '../styles/WordInstance.style';
import axios from 'axios';
import { Link } from 'react-router-dom'

var prod = 'https://intense-woodland-50358.herokuapp.com';

class WordInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      forms: [],
      kanji: '',
      kother: [],
      hira: '',
      info: [],
      activeTab: 0,
      loading: true,
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    var query = this.props.match.params.name

    axios.get(prod + '/api/v1/entry/' + query)
      .then(data => {
        var entry = data.data;
        
        this.setState({
          forms: entry.forms,
          kanji: entry.kdict[0],
          kother: (entry.kdict.slice(1)).concat(entry.hdict.slice(1)),
          hira: entry.hdict[0],
          info: entry.info,
          loading: false
        });

      });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var searchValue = this.state.value;
    axios.get(prod + '/api/v1/search/' + searchValue + '/1')
    .then(data => {
      var entry = data.data.docs;
      if (entry.length === 1){
        window.location.href="/entry/" + entry[0].kdict[0];
      }else{
        this.props.history.push("/search/" + searchValue + '/1');
      }

    });
  }

  handleTab(value){
    var updatedArray = [false, false];
    updatedArray[value] = true;
    this.setState({ activeTab: value});
  }

  render() {
    var activeTab = this.state.activeTab;

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
      <Notes>{info.misc.map((misc, jndex) => {return (<li key={jndex}>{misc}</li>)})}</Notes>
      <Notes>{info.xref.map((xref, jndex) => {return <li key={jndex}>See: {xref.join('・')}</li>})}</Notes>
    </div>
    );

    const otherForms = this.state.kother;
    var length = otherForms.length;
    const otherFormsList = otherForms.map((otherForms, index) =>
    <span key={index}>{otherForms + (length - 1 === index ? '' : ', ')}</span>);

    var showTabs;

    switch(activeTab){
      case 0:
        showTabs = (
          <AttributesWrapper>
            <ol>
              {infoList}
            </ol>
          </AttributesWrapper>);
          break;
      case 1:
        showTabs = (          
        <FormWrapper>
        <FormTitle>Conjugation Table for: {this.state.kanji} ({info[0].pos.join(', ')})</FormTitle>
          {formsList}
        </FormWrapper>);
          break;
      default:
          break;
    }

    return (
      this.state.loading ? null : (<WIWrapper>
        <WordContainer>
          <Link style={{ textDecoration: 'none' }} to={"/"}><HomeLogo>jVerbs</HomeLogo></Link>
          <form onSubmit={this.handleSubmit}>
            <label>
              <SearchBar type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Enter a word in English or Japanese..." />
            </label>
            <Button type="submit" value="Search"/>
          </form>
          <WordWrapper>
            <WordTitleWrapper>
              <WordHeader Color = "#45B29D">{this.state.kanji}</WordHeader>
              <WordHeader Color = "#3E4E50">{this.state.hira}</WordHeader>
              {otherForms.length !== 0 ? (<WordFooter>Alternative Forms: <p>{otherFormsList}</p> </WordFooter>) : null}
            </WordTitleWrapper>
            <Tab>
              <SubtitleHeader active = {activeTab === 0} onClick={() => this.handleTab(0)}>Define</SubtitleHeader>
              <SubtitleHeader active = {activeTab === 1} onClick={() => this.handleTab(1)}>Conjugate</SubtitleHeader>
            </Tab>
          </WordWrapper>
          {showTabs}
        </WordContainer>
        <Footer>
          <FooterContainter>
            <FooterText>
            This site uses the EDICT and KANJIDIC dictionary files. These files are the property of the Electronic Dictionary Research and Development Group, and are used in conformance with the Group's licence.
            </FooterText>
          </FooterContainter>
        </Footer>
      </WIWrapper>)
    );
  }
}

export default WordInstance;