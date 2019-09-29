import React from 'react';
import { ImgDifusion, ImgArtesania, ImgTurismo, ContainerImages, ContainerButton, TitleButton } from './styled';

export const Home: React.FC<any> = (props) => {
  return (
   <ContainerImages>
     <ContainerButton>
        <ImgDifusion/>
       <TitleButton>
          Difusion Cultural
       </TitleButton>
      </ContainerButton>
      <ContainerButton>
        <ImgArtesania/>
        <TitleButton>
          Artesanos
        </TitleButton>
      </ContainerButton>
      <ContainerButton>
        <ImgTurismo/>
        <TitleButton>
          Turismo Vivencial
        </TitleButton>
      </ContainerButton>
    </ContainerImages>
  );
}

