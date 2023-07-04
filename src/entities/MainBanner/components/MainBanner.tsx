import React from "react";
import { Banner } from "../../../shared/components";
import styled from "styled-components";

type Props = {
  icon?: string;
  text?: string;
};

export const MainBanner = ({ ...props }: Props) => {
  return (
    <Banner
      icon={<Icon icon={props.icon} />}
      text={<Text>{props.text}</Text>}
    />
  );
};

const Icon = styled.div`
  background: url(${({ icon }: Props) => (icon ? icon : "")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 52px;
  min-height: 52px;
  @media (max-width: 700px) {
    min-width: 42px;
    min-height: 42px;
  }
`;
const Text = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 28px;
  color: var(--white);
  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 18px;
  }
`;
