import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'emit_event';
const blockData = {
  message0: 'broadcast event %1',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
    }
  ],
  colour: '#F5AB1A',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Create event',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  let value_name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  return `eventEmitter.emit(${value_name});`;
};
