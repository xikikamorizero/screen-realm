import React from "react";
import styled from "styled-components";

type Props = {
  image?: string;
  setState?:(a:false)=>void;
};

export const Screenshot = ({ ...props }: Props) => {
  return (
    <Container onClick={()=>{
        if(props.setState){
            props.setState(false);
        }
    }}>
      <Image image={props.image} />
    </Container>
  );
};
const Image = styled.div`
  width: 100%;
  height: 40vw;
  background: url(${({ image }: Props) => (image ? image : "")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
  overflow: hidden;
  cursor: pointer;
`;
