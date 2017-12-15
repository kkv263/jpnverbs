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
      value: ''
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount(){
  //   axios.get('http://localhost:3001/api/entries')
  //     .then(data => {

  //       this.setState({
  //       });

  //     });
  // }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    const forms =    
    [ { form: 'Present',
    plainp: '拘る',
    plainn: '拘らない',
    politep: '拘ります',
    politen: '拘りません',
    },
  { form: 'Past',
    plainp: '拘った',
    plainn: '拘らなかった',
    politep: '拘りました',
    politen: '拘りませんでした',
    },
  { form: 'Te',
    plainp: '拘って',
    plainn: '拘らなくて',
    politep: '拘りまして',
    politen: '拘りませんで',
    },
  { form: 'Present Progressive',
    plainp: '拘っている',
    plainn: '拘っていない',
    politep: '拘っています',
    politen: '拘っていません',
    },
  { form: 'Volitional',
    plainp: '拘ろう',
    plainn: '拘るまい',
    politep: '拘りましょう',
    politen: '拘りますまい',
    },
  { form: 'Desire (Present)',
    plainp: '拘りたい',
    plainn: '拘りたくない',
    politep: '拘りたいです',
    politen: '拘りたくないです',
    },
  { form: 'Desire (Past)',
    plainp: '拘りたかった',
    plainn: '拘りたくなかった',
    politep: '拘りたかったです',
    politen: '拘りたくなかったです',
    },
  { form: 'Conditional',
    plainp: '拘ったら',
    plainn: '拘らなかったら',
    politep: '拘りましたら',
    politen: '拘りませんでしたら',
    },
  { form: 'Provisional',
    plainp: '拘れば',
    plainn: '拘らなければ',
    politep: '拘りますなら(ば)',
    politen: '拘りませんなら(ば)',
    },
  { form: 'Potential',
    plainp: '拘れる',
    plainn: '拘れない',
    politep: '拘れます',
    politen: '拘れません',
    },
  { form: 'Passive',
    plainp: '拘られる',
    plainn: '拘られない',
    politep: '拘られます',
    politen: '拘られません',
    },
  { form: 'Causative',
    plainp: '拘らせる',
    plainn: '拘らせない',
    politep: '拘らせます',
    politen: '拘らせません',
    },
  { form: 'Causative (Alt.)',
    plainp: '拘らす',
    plainn: '拘らさない',
    politep: '拘らします',
    politen: '拘らしません',
    },
  { form: 'Causative Passive',
    plainp: '拘らせられる',
    plainn: '拘らせられない',
    politep: '拘らせられます',
    politen: '拘らせられません',
    },
  { form: 'Conjectural',
    plainp: '拘るだろう',
    plainn: '拘らないだろう',
    politep: '拘るでしょう',
    politen: '拘らないでしょう',
    },
  { form: 'Alternative',
    plainp: '拘ったり',
    plainn: '拘らなかったり',
    politep: '拘りましたり',
    politen: '拘りませんでしたり',
    },
  { form: 'Imperative',
    plainp: '拘れ',
    plainn: '拘るな',
    politep: '拘りなさい',
    politen: '拘りなさるな',
    } ]

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
              <WordHeader Color = "#45B29D">拘る</WordHeader>
              <WordHeader Color = "#3E4E50">こたわる</WordHeader>
              <WordFooter>Alternative Forms: 拘わる </WordFooter>
            </WordTitleWrapper>
            <AttributesWrapper>
              <DefinitionList>
                <WordAttributes>Godan verb with る ending, intransitive verb</WordAttributes>
                <WordDefinition> to fuss over; to be particular about</WordDefinition>
                <Notes><li>Usually written using kana alone</li></Notes>
                <WordDefinition> to be obsessive about; to be fixated on</WordDefinition>
                <Notes><li>Usually written using kana alone</li></Notes>
                <WordDefinition> to obstruct; to hinder</WordDefinition>
                <Notes ><li>Usually written using kana alone</li></Notes>
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