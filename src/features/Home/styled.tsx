import styled from 'styled-components';

import difusion from '../../../src/assets/images/difusion.jpg';
import background from '../../../src/assets/images/background.jpg';
import artesania from '../../../src/assets/images/artesania.jpg';
import noticias from '../../../src/assets/images/noticias.jpg';

export const ImgDifusion = styled.div`
  background-size: 100%;
  background-image: url(${difusion});
  background-position: center; 
  background-repeat: no-repeat;
  display:flex;
  height: 100px;
  width: 100px;
  margin-right: 15px;
`;

export const ImgArtesania = styled.div`
  background-size: 100%;
  background-image: url(${artesania});
  background-position: center; 
  background-repeat: no-repeat;
  display:flex;
  height: 100px;
  width: 100px;
  margin-right: 15px;
`;

export const ImgTurismo = styled.div`
  background-size: 100%;
  background-image: url(${noticias});
  background-position: center; 
  background-repeat: no-repeat;
  display:flex;
  height: 100px;
  width: 100px;
  margin-right: 15px;
`;

export const ContainerImages = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  display: inline-flex;
  justify-content: space-around;
  background: white;
`;
export const ContainerButton = styled.button`
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  border: none;
  cursor : pointer;
  align-items: center;
  padding-top: 8%;
  &:focus{
    outline: 0;
  }
  &:hover{
    background: rgba(1,1,1,0.5);
  }
  div{
    width: 300px;
    height: 70%;
    margin-right: 15px;
  }
`;

export const TitleButton = styled.div`
  font-size: 31px;
  font-weight: bold;

`;



