import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'rd_name';

const blockData = {
  message0: '%1 of deleted role ',
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

JavaScript[blockName] = function (block) {
  const info = block.getFieldValue('INFO');
  const code = [`role.${info}`, JavaScript.ORDER_NONE];
  return code;
};
