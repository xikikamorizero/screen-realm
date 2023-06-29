import React, {useState} from "react";
import { Slaider } from "../../../entities";
import { observer } from "mobx-react-lite";
import { useList } from "../lib/hook";
import * as types from '../../../shared/api/types';

type Props = {
    type: "TOP_250_BEST_FILMS" | "TOP_100_POPULAR_FILMS" | "TOP_AWAIT_FILMS";
    text:string;
    navigate:string;
  };

export const SlaiderWidget =observer(({...props}:Props)=>{
  const [array, setArray] = useState<types.Film[]>([]);  
  useList(props.type, setArray);
    
    return(
      <Slaider array={array} text={props.text} navigate={props.navigate} />
    )
});