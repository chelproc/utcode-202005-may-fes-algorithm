import * as React from "react";
import { BlocklyEditor } from "./Editor/BlocklyEditor";
import { ExecutionController } from "./Controller/ExecutionController";
import { SortAlgorithmViewer } from "./Viewer/SortAlgorithm/SortAlgorithmViewer";

import "../blocks";

export const App: React.FC = () => <>
  <BlocklyEditor />
  <ExecutionController />
  <SortAlgorithmViewer />
</>;
