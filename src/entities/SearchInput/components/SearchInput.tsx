import React, { KeyboardEvent, useState } from "react";
import styled from "styled-components";
import { Input } from "../../../shared/components";
import icon from "../assets/search.png";

type Props = {
  icon?: string;
  useList?: (s: string) => void;
};

export const SearchInput = ({ ...props }: Props) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && props.useList) {
      props.useList(value);
    }
  };

  return (
    <ContainerSearchinput>
      <Icon icon={icon} />
      <Input
        type={"text"}
        placeholder={"Поиск..."}
        value={value}
        onChange={(e) => {
          setValue(String(e.target.value));
        }}
        onKeyDown={handleKeyDown}
      />
    </ContainerSearchinput>
  );
};

const ContainerSearchinput = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid silver;
  padding-bottom: 10px;
`;
const Icon = styled.div`
  min-width: 60px;
  min-height: 60px;
  background: url(${({ icon }: Props) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60px;
`;
