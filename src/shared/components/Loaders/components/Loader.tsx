import styled from 'styled-components';
import logo from '../assets/logo.png';

type Props = {
    loaderSearch?:boolean;
}

export const Loader = ({...props}:Props) => {
    return (
        <Root loaderSearch={props.loaderSearch}>
            <Logo src={logo} loaderSearch={props.loaderSearch} />  
        </Root>
    );
};

const Root = styled.div`
  position: ${({loaderSearch}: Props) => loaderSearch? 'static':'fixed'};
  top: 0;
  left: 50%;
  transform: ${({loaderSearch}: Props) => loaderSearch? 'translateX(0%)':'translateX(-50%)'} ;
  width: 100%;
  height: ${({loaderSearch}: Props) => loaderSearch? '150px':'100vh'};
  background: var(--main);
  z-index: ${({loaderSearch}: Props) => loaderSearch? 0 : 9999999999999};
  display: flex;
  justify-content: center;
  align-items: center;
`;

type LogoProps = {
    src: string;
    loaderSearch?:boolean;
}

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({loaderSearch}: Props) => loaderSearch? '70px':'100px'};
  height: ${({loaderSearch}: Props) => loaderSearch? '70px':'100px'};

  background-image: url(${({src}: LogoProps) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size:  ${({loaderSearch}: Props) => loaderSearch? '70px':'100px'};
  animation-name: loader;
  animation-duration: 4s;
  transition: all 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  

  @keyframes loader {
    0% {
        background-size: ${({loaderSearch}: Props) => loaderSearch? '50px':'60px'};
        transform: rotate(0deg);
    }
    50% {
        background-size: ${({loaderSearch}: Props) => loaderSearch? '70px':'100px'};;
        transform: rotate(180deg);  
    }
    100% {
        background-size: ${({loaderSearch}: Props) => loaderSearch? '50px':'60px'};;
        transform: rotate(360deg);
    }
  }
`;