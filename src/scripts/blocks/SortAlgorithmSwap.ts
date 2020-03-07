import * as Blockly from "blockly";
import { BlockDefinition } from "../@types/BlocklyHelpers";

export const BLOCK_TYPE = "SortAlgorithmSwap";

Blockly.Blocks[BLOCK_TYPE] = {
  init() {
    this.jsonInit({
      "message0": "%1 の子と入れ替わる",
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
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
} as BlockDefinition;

Blockly.JavaScript[BLOCK_TYPE] = block => {
  const direction = block.getFieldValue("direction") === "right" ? 1 : -1;
  return `swap(${direction});`;
};
