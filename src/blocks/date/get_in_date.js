import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'get_in_date';

const blockData = {
  message0: 'get in date %1 %2',
  args0: [
    {
      type: 'input_value',
      name: 'DATE',
      check: 'Number'
    },
    {
      type: 'field_dropdown',
      name: 'DATA_TYPE',
      options: [
        ['%{BKY_SECOND}', 'SECOND'],
        ['%{BKY_MINUTE}', 'MINUTE'],
        ['%{BKY_HOUR}', 'HOUR'],
        ['%{BKY_DATE}', 'DATE'],
        ['%{BKY_DAY_OF_WEEK}', 'DAY_OF_WEEK']
      ]
    }
  ],
  output: 'Number',
  colour: '#D14081',
  tooltip: 'Get a certain thing from a date.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const date = javascriptGenerator.valueToCode(block, 'DATE', javascriptGenerator.ORDER_ATOMIC);
  const dataType = block.getFieldValue('DATA_TYPE');
  if (dataType === 'SECOND') {
    return [`(${date}.getSeconds())`, javascriptGenerator.ORDER_NONE];
  } else if (dataType === 'MINUTE') {
    return [`(${date}.getMinutes())`, javascriptGenerator.ORDER_NONE];
  } else if (dataType === 'HOUR') {
    return [`(${date}.getHours())`, javascriptGenerator.ORDER_NONE];
  } else if (dataType === 'DATE') {
    return [`(${date}.getDate())`, javascriptGenerator.ORDER_NONE];
  } else if (dataType === 'DAY_OF_WEEK') {
    return [`(${date}.getDay())`, javascriptGenerator.ORDER_NONE];
  } else {
    return [`(${date}.getSeconds())`, javascriptGenerator.ORDER_NONE];
  }
};
