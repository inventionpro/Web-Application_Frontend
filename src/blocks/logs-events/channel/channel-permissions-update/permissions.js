import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'permissions';
const blockData = {
  message0: '%1 permission',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['old', 'oldPermissions'],
        ['new', 'newPermissions']
      ]
    }
  ],
  output: Types.String,
  colour: '#5BA58C',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const info2 = block.getFieldValue('INFO');
  let info1 = info2.replace("'", '');
  let info = info1.replace("'", '');
  return [info, javascriptGenerator.ORDER_NONE];
};
