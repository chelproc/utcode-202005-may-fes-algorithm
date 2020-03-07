import * as Blockly from "blockly";

export type BlockDefinition = {
  [P in keyof Blockly.Block]?:
    Blockly.Block[P] extends (...args: infer R) => infer S
      ? (this: Blockly.Block, ...args: R) => S
      : Blockly.Block[P]
} & Object;
