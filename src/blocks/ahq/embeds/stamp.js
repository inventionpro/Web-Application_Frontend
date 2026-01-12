import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'stamp_ahq_embed';

const blockData = {
  message0: 'Set Timestamp to Embed %1',
  args0: [
    {
      type: 'input_value',
      name: 'button name',
      check: 'String'
    }
  ],
  colour: '#40BF4A',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'button name', javascriptGenerator.ORDER_NONE) || 'embed';
  const finaln = name.replace("'", '').replace("'", '');
  const code = `${finaln}.setTimestamp();`;
  return code;
};
