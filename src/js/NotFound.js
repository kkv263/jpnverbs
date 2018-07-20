import React, { Component } from 'react';
import { NotFoundWrapper, NotFoundText, TextWrapper } from '../styles/NotFound.style';

class NotFound extends Component {
  render() {
    return (
      <NotFoundWrapper>
        <TextWrapper>
          <NotFoundText>404: Looks like you're at the wrong place!</NotFoundText>
        </TextWrapper>
      </NotFoundWrapper>
    );
  }
}

export default NotFound;