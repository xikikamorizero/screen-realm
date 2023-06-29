import styled from 'styled-components';

import logo from './assets/logo.svg';



export const PageLoaderWithLogo = () => {
    return (
        <Root className={'MAX_WIDTH_PAGE'}>
            <Logo src={logo}/>
        </Root>
    );
};

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  z-index: 99999999999;
`;

type LogoProps = {
    src: string;
}

const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 100%;


  background-image: url(${({src}: LogoProps) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes example {
    0% {
      width: 8vw;
    }
    50% {
      width: 10vw;
    }
    100% {
      width: 8vw;
    }
  }
`;