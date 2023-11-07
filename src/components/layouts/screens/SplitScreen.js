import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

/**
 *
 * @returns this component displays content in a split screen way,
 * should you need to dictate the sizes of the two panels, you can
 * adjust this by using the leftWeight and rightWeight props.
 * @param {number} leftWeight
 * @param {number} rightWeight
 */
const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
