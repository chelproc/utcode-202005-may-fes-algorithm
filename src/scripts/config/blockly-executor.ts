import Interpreter from "js-interpreter";
import Blockly from "blockly";
import { sortAlgorithmViewer } from "../components/Viewer/SortAlgorithm/SortAlgorithmViewer";
import { timeoutPromise } from "../lib/promise";

Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';

const nativeFunctions = {
  move(direction: -1 | 1) {
    sortAlgorithmViewer.setState({
      currentPosition: sortAlgorithmViewer.state.currentPosition + direction
    });
  },
  swap(relativeTarget: -1 | 1) {
    sortAlgorithmViewer.setState({
      heights: sortAlgorithmViewer.state.heights.map((value, index) =>
        index === sortAlgorithmViewer.state.currentPosition ? sortAlgorithmViewer.state.heights[sortAlgorithmViewer.state.currentPosition + relativeTarget] :
        index === sortAlgorithmViewer.state.currentPosition + relativeTarget ? sortAlgorithmViewer.state.heights[sortAlgorithmViewer.state.currentPosition] :
        value
      )
    });
  },
  isTaller(relativeTarget: -1 | 1) {
    return (
      sortAlgorithmViewer.state.heights[sortAlgorithmViewer.state.currentPosition]
      < sortAlgorithmViewer.state.heights[sortAlgorithmViewer.state.currentPosition + relativeTarget]
    );
  },
  someoneExists(relativeTarget: -1 | 1) {
    const target = sortAlgorithmViewer.state.currentPosition + relativeTarget
    return 0 <= target && target < sortAlgorithmViewer.state.heights.length;
  }
} as const;

export async function executeBlockly() {
  const workspace = Blockly.getMainWorkspace() as Blockly.WorkspaceSvg;
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  const interpreter = new Interpreter(code, (interpreter, globalObject) => {
    for (const [funcName, func] of Object.entries(nativeFunctions)) {
      interpreter.setProperty(
        globalObject,
        funcName,
        interpreter.createNativeFunction(func)
      );
    }
    interpreter.setProperty(
      globalObject,
      "highlightBlock",
      interpreter.createNativeFunction(
        (id: string) => { workspace.highlightBlock(id); }
      )
    );
  });
  while (interpreter.step()) {
    await timeoutPromise(10);
  }
}