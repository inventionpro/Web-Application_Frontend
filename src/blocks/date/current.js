import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 's4d_current';
const blockData = {
  message0: '%{BKY_CURRENT}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'DATA_TYPE',
      options: [
        ['%{BKY_SECOND}', 'SECOND'],
        ['%{BKY_MINUTE}', 'MINUTE'],
        ['%{BKY_HOUR}', 'HOUR'],
        ['%{BKY_DATE}', 'DATE'],
        ['%{BKY_DAY_OF_WEEK}', 'DAY_OF_WEEK'],
        ['DATE', 'COOLDOWN'],
        ['UNIX', 'UNIX'],
        ['UNIX (ms)', 'UNIX_MS']
      ]
    }
  ],
  output: Types.Number,
  colour: '#5ba58b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const dataType = block.getFieldValue('DATA_TYPE');
  switch (dataType) {
    case 'SECOND':
      return ['(new Date().getSeconds())', javascriptGenerator.ORDER_NONE];
    case 'MINUTE':
      return ['(new Date().getMinutes())', javascriptGenerator.ORDER_NONE];
    case 'HOUR':
      return ['(new Date().getHours())', javascriptGenerator.ORDER_NONE];
    case 'DATE':
      return ['(new Date().getDate())', javascriptGenerator.ORDER_NONE];
    case 'DAY_OF_WEEK':
      return ['(new Date().getDay())', javascriptGenerator.ORDER_NONE];
    case 'COOLDOWN':
      return ['new Date()', javascriptGenerator.ORDER_NONE];
    case 'UNIX':
      return ['Math.floor(new Date().getTime()/1000)', javascriptGenerator.ORDER_NONE];
    case 'UNIX_MS':
      return ['(new Date().getTime())', javascriptGenerator.ORDER_NONE];
  }
};
