import * as React from "react";
import { executeBlockly } from "../../config/blockly-executor";

export const ExecutionController: React.FC = props => <button onClick={() => {
  executeBlockly();
}}>実行</button>;