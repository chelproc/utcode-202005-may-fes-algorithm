import * as React from "react";
import * as Blockly from "blockly";
import { toolboxXml } from "../../config/blockly-toolbox";

export class BlocklyEditor extends React.Component {
  private editorElementRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    Blockly.inject(this.editorElementRef.current!, {
      toolbox: toolboxXml
    });
  }
  render() {
    return <>
      <div style={{width: "1000px", height: "500px"}} ref={this.editorElementRef} />
    </>;
  }
}