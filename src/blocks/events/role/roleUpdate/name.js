import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'ru_name';

const blockData = {
  message0: '%2 of %1 ',
  args0: [
    {
      type: 'field_dropdown',
      name: 'ROLE',
      options: [
        ['new role', 'newRole'],
        ['old role', 'oldRole']
      ]
    },
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['name', 'name'],
        ['ID', 'id'],
        ['hoisted', 'hoist'],
        ['mentionable', 'mentionable'],
        ['hex color', 'hexColor'],
        ['color', 'color'],
        ['position', 'position'],
        ['deleted', 'deleted']
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
  const role = block.getFieldValue('ROLE');
  const code = [`${role}.${info}`, javascriptGenerator.ORDER_NONE];
  return code;
};
