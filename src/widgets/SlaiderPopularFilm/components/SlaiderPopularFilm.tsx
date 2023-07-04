import React, { useContext } from "react";
import { Slaider } from "../../../entities";
import { observer } from "mobx-react-lite";
import { useList } from "../lib/hook";

type Props = {
  text: string;
  navigate: string;
};

export const SlaiderPopular = observer(({ ...props }: Props) => {
  const { list, loader } = useList();
  return (
    <Slaider
      loader={loader}
      array={list}
      text={props.text}
      navigate={props.navigate}
    />
  );
});
