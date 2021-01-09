import styled from 'styled-components';
import homeBg from "../assets/framsidan.jpg";


export const BrfBackground = styled.div`
  background-image: url(${homeBg});
  background-position: left top;
  background-size: auto;
  background-repeat: repeat;
  background-attachment: scroll;
  min-height: 100vh;
  //filter: blur(3px);
  //z-index: 1;
`;
