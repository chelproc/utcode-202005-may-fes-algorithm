import * as Blockly from "blockly";
import { BlockDefinition } from "../@types/BlocklyHelpers";

export const BLOCK_TYPE = "SortAlgorithmIfSomeoneIsTaller";

Blockly.Blocks[BLOCK_TYPE] = {
  init() {
    this.jsonInit({
      "message0": "%1 の子のほうが大きい",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "direction",
          "options": [
            [
              "右",
              "right"
            ],
            [
              "左",
              "left"
            ]
          ]
        }
      ],
      "output": "Boolean",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
} as BlockDefinition;

Blockly.JavaScript[BLOCK_TYPE] = block => {
  const direction = block.getFieldValue("direction") === "right" ? 1 : -1;
  return [`isTaller(${direction})`, Blockly.JavaScript.ORDER_ATOMIC as number];
};
