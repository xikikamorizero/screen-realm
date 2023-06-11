import React from "react";
import styled from "styled-components";
import error from '../assets/errorImage.jpg';
import { ImagePoster } from "../../../shared/components";

type Props = {
    image?:string;
    creator?:string;
    name?:string;
}

export const MainPoster =({...props}:Props)=>{
    return(
     <ImagePoster image={<Image image={props.image} />} creator={<Creator>{props.creator}</Creator>} name={<Name>{props.name}</Name>}  />
    )
}


const Image = styled.div`
width: 212px;
height: 222px;
background: url(${({ image }: Props) => image ? image : error});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 20px;
`

const Creator = styled.div`
width:100%;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 18px;
color:var(--creator)
`

const Name = styled.div`
width:100%:
font-style: normal;
font-weight: 500;
font-size: 21px;
line-height: 24px;
color:var(--white);
`