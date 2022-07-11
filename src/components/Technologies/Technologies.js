import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id='tech'>
  <SectionDivider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    Ive worked with a range of technologies in the web devolpment world. From Back-end To Design.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="6rem" color='red' />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
        Experience with <br />
        React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="6rem" color='red' />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
        Experience with <br />
        node.js and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
