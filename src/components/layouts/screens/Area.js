import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: calc(${(props) => props.paddingTop} * 1px);
  padding-bottom: calc(${(props) => props.paddingBottom} * 1px);
  padding-left: 10px;
  padding-right: 10px;
  margin-inline: ${(props) => props.alignItems};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => props.display};
  gap: calc(${(props) => props.gap} * 1px);
  flex-wrap: ${(props) => props.flexWrap};
  text-align: ${(props) => props.textAlign};
`;
/**
 *
 * @param {number} paddingTop
 * @param {number} paddingRight
 * @param {number} paddingBottom
 * @param {number} paddingLeft
 * @param {string} alignItems
 * @returns This is a container that creates an elment to put elements in.
 */
const Area = ({
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  backgroundColor,
  display,
  gap,
  alignItems,
  flexWrap,
  textAlign,
  children,
  viewHeight,
  classnames,
}) => {
  const containerStyles = {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    backgroundColor,
    display,
    gap,
    flexWrap,
    textAlign,
    alignItems,
    viewHeight,
  };
  return (
    <Container className={classnames} style={containerStyles}>
      {children}
    </Container>
  );
};

export default Area;
