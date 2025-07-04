import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'ps_cpu_stats';

const blockData = {
  message0: '%1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['CPU Average Usage', 'usage'],
        ['CPU Model', 'model']
      ]
    }
  ],
  output: 'String',
  colour: '#a5745b',
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
  const code = [`cpu.${info}()`, JavaScript.ORDER_NONE];
  return code;
};
