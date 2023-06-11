import React from "react";
import { Banner } from "../../../shared/components";
import styled from "styled-components";

type Props = {
    icon?: string;
    text?: string;
}

export const MainBanner = ({ ...props }: Props) => {
    return (
        <Banner icon={<Icon icon={props.icon} />} text={<Text>
            {props.text}
        </Text>} />
    )
}

const Icon = styled.div`
background: url(${({ icon }: Props) => icon ? icon : ''});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
min-width:52px;
min-height:52px;
`
const Text = styled.div`
font-style: normal;
font-weight: 500;
font-size: 21px;
line-height: 28px;
color:var(--white);
`