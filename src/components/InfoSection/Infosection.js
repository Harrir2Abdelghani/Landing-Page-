import React from 'react';
import { Container, InfoColumn, InfoRow, Infosec, TextWrapper } from './infosectionelements';

const Infosection = ({lightBg, imgStart}) => {
  return (
<>

    <Infosec lightBg={lightBg}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              hello
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    
    </Infosec>

</>);
};

export default Infosection;
