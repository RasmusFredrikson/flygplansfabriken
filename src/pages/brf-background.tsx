import styled from 'styled-components';
import homeBg from "../assets/framsidan.jpg";


export const BrfBackground = styled.div`
  background-image: url(${homeBg});
  background-position: center right;
  background-size: auto;
  background-repeat: repeat;
  background-attachment: scroll;
  filter: blur(3px);
  z-index: 1;
`;
