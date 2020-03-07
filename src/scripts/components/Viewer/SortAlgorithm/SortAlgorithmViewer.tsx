import * as React from "react";
import styled from "styled-components";

export type SortAlgorithmViewerState = {
  currentPosition: number,
  heights: number[]
}

const SortAlgorithmViewerContainer = styled.div`
  position: relative;
  border: 1px solid #000;
  width: 1000px;
  height: 400px;
`;

const SortAlgorithmViewerItem = styled.div<{position: number, height: number}>`
  position: absolute;
  bottom: 0;
  left: ${props => props.position * 100}px;
  width: 40px;
  height: ${props => props.height * 40}px;
  background-color: blue;
`;

const SortAlgorithmViewerTeacher = styled.div<{position: number}>`
  position: absolute;
  bottom: -40px;
  left: ${props => props.position * 100}px;
  width: 40px;
  height: 40px;
  background-color: red;
`;

export let sortAlgorithmViewer: SortAlgorithmViewer;
export class SortAlgorithmViewer extends React.Component<{}, SortAlgorithmViewerState> {
  state = {
    currentPosition: 0,
    heights: [4, 8, 1, 6, 9, 5, 10, 2, 3, 7]
  };
  componentDidMount() {
    sortAlgorithmViewer = this;
  }
  render() {
    return <SortAlgorithmViewerContainer>
      {this.state.heights.map((height, index) =>
        <SortAlgorithmViewerItem key={height} position={index} height={height} />
      )}
      <SortAlgorithmViewerTeacher position={this.state.currentPosition} />
    </SortAlgorithmViewerContainer>
  }
}
