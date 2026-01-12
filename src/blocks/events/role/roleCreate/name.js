import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'rc_name';

const blockData = {
  message0: '%1 of created role ',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['name', 'name'],
        ['ID', 'id'],
        ['hoisted', 'hoist'],
        ['mentionable', 'mentionable']
      ]
    }
  ],
  output: 'String',
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
  const info = block.getFieldValue('INFO');
  const code = [`role.${info}`, javascriptGenerator.ORDER_NONE];
  return code;
};
