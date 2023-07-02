import styled from 'styled-components';
import logo from '../assets/logo.png';


export const Loader = () => {
    return (
        <Root>
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
  background: var(--main);
  z-index: 99999999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type LogoProps = {
    src: string;
}

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vw;

  background-image: url(${({src}: LogoProps) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10vw;
  animation-name: loader;
  animation-duration: 4s;
  transition: all 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  

  @keyframes loader {
    0% {
        background-size: 6vw;
        transform: rotate(0deg);
    }
    50% {
        background-size: 10vw;
        transform: rotate(180deg);
    }
    100% {
        background-size: 6vw;
        transform: rotate(360deg);
    }
  }
`;