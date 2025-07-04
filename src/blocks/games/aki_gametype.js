import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'aki_gametype';

const blockData = {
  message0: '%1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['Character', "'character'"],
        ['Object', "'object'"],
        ['Animal', "'animal'"]
      ]
    }
  ],
  colour: '#D14081',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const type = block.getFieldValue('type');
  const code = [`${type}`, JavaScript.ORDER_NONE];

  return code;
};
