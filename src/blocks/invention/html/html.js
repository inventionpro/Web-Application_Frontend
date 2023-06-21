import Blockly from "blockly/core";

const blockName = "inv_html";

const blockData = {
  "message0": "html %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "output": "String",
  "colour": 180,
  "tooltip": "Generates html",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = `"<html>
    ${statements_name}
  </html>"`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};