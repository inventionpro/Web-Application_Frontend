import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'topic';

const blockData = {
  message0: '%1 topic',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['old', 'oldTopic'],
        ['new', 'newTopic']
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
  const info2 = block.getFieldValue('INFO');
  let info1 = info2.replace("'", '');
  let info = info1.replace("'", '');
  const code = [`${info}`, javascriptGenerator.ORDER_NONE];
  return code;
};
