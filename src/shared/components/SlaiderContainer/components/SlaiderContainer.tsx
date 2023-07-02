import styled from "styled-components";

export const SlaiderContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
`;