import {useEffect} from 'react'
import styled from "styled-components";
import error from "../assets/error.png";

type Props = {
  text:string;
}

export const Error402 = ({...props}:Props) => {
  useEffect(()=>{
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
  };
  },[])
  
  return (
    <Root>
      <Logo src={error} />
      <Title>
        {props.text}
      </Title>
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
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

type LogoProps = {
  src: string;
};

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7vw;
  height: 7vw;

  background-image: url(${({ src }: LogoProps) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 7vw;
`;
const Title = styled.div`
  max-width: 80%;
  text-align: center;
  color: var(--white);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
