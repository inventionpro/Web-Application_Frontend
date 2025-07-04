import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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
        ['UNIX', 'UNIX']
      ]
    }
  ],
  output: 'Number',
  colour: '#5ba58b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const dataType = block.getFieldValue('DATA_TYPE');
  if (dataType === 'SECOND') {
    return ['(new Date().getSeconds())', JavaScript.ORDER_NONE];
  } else if (dataType === 'MINUTE') {
    return ['(new Date().getMinutes())', JavaScript.ORDER_NONE];
  } else if (dataType === 'HOUR') {
    return ['(new Date().getHours())', JavaScript.ORDER_NONE];
  } else if (dataType === 'DATE') {
    return ['(new Date().getDate())', JavaScript.ORDER_NONE];
  } else if (dataType === 'DAY_OF_WEEK') {
    return ['(new Date().getDay())', JavaScript.ORDER_NONE];
  } else if (dataType === 'COOLDOWN') {
    return ['new Date()', JavaScript.ORDER_NONE];
  } else if (dataType === 'UNIX') {
    return ['Math.floor(new Date().getTime()/1000)', JavaScript.ORDER_NONE];
  }
};
