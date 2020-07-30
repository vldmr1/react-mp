import styled from 'styled-components';
import PosterCollage from '../../assets/img/poster-collage.jpg';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  font-family: ${({ theme }): string => theme.fonts.montserrat};

  &::before {
    content: '';
    position: absolute;
    width: 105%;
    height: 105%;
    top: 0;
    left: 0;
    background-image: url(${PosterCollage});
    background-size: 240%;
    background-repeat: no-repeat;
    z-index: -1;
    filter: blur(3px) brightness(0.4);
  }
`;

export default MainWrapper;
