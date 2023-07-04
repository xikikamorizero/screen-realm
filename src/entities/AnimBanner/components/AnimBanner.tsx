import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { Banner1, Banner2, Banner3 } from "../../../shared/components";
import "./AnimBanner.css";

export const AnimBanner = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const components: any = [Banner1, Banner2, Banner3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentComponentIndex(
        (prevIndex) => (prevIndex + 1) % components.length
      );
    }, 7000);

    return () => {
      clearInterval(timer);
    };
  }, [components]);

  const CurrentComponent = components[currentComponentIndex];

  return (
    <Container>
      <TransitionGroup component={null}>
        <CSSTransition
          key={currentComponentIndex}
          timeout={1000}
          classNames="fade"
        >
          <ComponentsContainer>{CurrentComponent()}</ComponentsContainer>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
const ComponentsContainer = styled.div`
  position: relative;
`;
