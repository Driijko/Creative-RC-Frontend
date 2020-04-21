import React, {useContext} from 'react';

import Context from '../../1 Context/Context';

import {TagMenuContainer} from './Styled Components/TagMenuContainer';
import {TagColumnContainer} from './Styled Components/TagColumnContainer';
import {TagContainer} from './Styled Components/TagContainer';

export default function TagMenuSystem(props) {

  const {data} = useContext(Context);

  return (
    <TagMenuContainer>
      <TagColumnContainer>
        <TagContainer type={0}>MEDIUMS</TagContainer>
        <TagContainer type={1}>Music</TagContainer>
        <TagContainer type={1}>Visual Art</TagContainer>
        <TagContainer type={2}>Animation</TagContainer>
        <TagContainer type={2}>GIFs</TagContainer>
        <TagContainer type={0} >SOFTWARE</TagContainer>
        
        <TagContainer type={0} >TECHNIQUES</TagContainer>



      </TagColumnContainer>
    </TagMenuContainer>
  )
}