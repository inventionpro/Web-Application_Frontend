import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import '@blockly/field-grid-dropdown';

const blockName = 'frost_current';

const blockData = {
  message0: 'Current %1',
  args0: [
    {
      type: 'field_grid_dropdown',
      name: 'DATA_TYPE',
      options: [
        ['Millisecond', 'MILLISECOND'],
        ['Second', 'SECOND'],
        ['Minute', 'MINUTE'],
        ['Hour', 'HOUR'],
        ['Day', 'DATE'],
        ['Day of the week', 'DAY_OF_WEEK'],
        ['Month (0-11)', 'MONTH'],
        ['Year', 'YEAR'],
        ['Date', 'COOLDOWN'],
        ['UNIX', 'UNIX'],
        ['UNIX (ms)', 'UNIX_ms'],
        ['UTC millisecond', 'UTC_MILLISECOND'],
        ['UTC second', 'UTC_SECOND'],
        ['UTC minute', 'UTC_MINUTE'],
        ['UTC hour', 'UTC_HOUR'],
        ['UTC Day of the week', 'UTC_DAY_OF_WEEK'],
        ['UTC Day', 'UTC_DAY'],
        ['UTC month (0-11)', 'UTC_MONTH'],
        ['UTC year', 'UTC_YEAR']
      ]
    }
  ],
  output: 'Number',
  colour: '#D14081',
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
  if (dataType === 'MILLISECOND') {
    return ['(new Date().getMilliseconds())', JavaScript.ORDER_NONE];
  } else if (dataType === 'SECOND') {
    return ['(new Date().getSeconds())', JavaScript.ORDER_NONE];
  } else if (dataType === 'MINUTE') {
    return ['(new Date().getMinutes())', JavaScript.ORDER_NONE];
  } else if (dataType === 'HOUR') {
    return ['(new Date().getHours())', JavaScript.ORDER_NONE];
  } else if (dataType === 'DATE') {
    return ['(new Date().getDate())', JavaScript.ORDER_NONE];
  } else if (dataType === 'DAY_OF_WEEK') {
    return ['(new Date().getDay())', JavaScript.ORDER_NONE];
  } else if (dataType === 'MONTH') {
    return ['(new Date().getMonth())', JavaScript.ORDER_NONE];
  } else if (dataType === 'YEAR') {
    return ['(new Date().getFullYear())', JavaScript.ORDER_NONE];
  } else if (dataType === 'COOLDOWN') {
    return ['new Date()', JavaScript.ORDER_NONE];
  } else if (dataType === 'UNIX') {
    return ['Math.floor(new Date().getTime()/1000)', JavaScript.ORDER_NONE];
  } else if (dataType === 'UNIX_ms') {
    return ['new Date().getTime()', JavaScript.ORDER_NONE];
  } else if (dataType === 'UTC_MILLISECOND') {
    return ['(new Date().getUTCMilliseconds())', JavaScript.ORDER_NONE];
  } else if (dataType === 'UTC_SECOND') {
    return ['(new Date().getUTCSeconds())', JavaScript.ORDER_NONE];
  } else if (dataType === 'UTC_MINUTE') {
    return ['(new Date().getUTCMinutes())', JavaScript.ORDER_NONE];
  } else if (dataType === 'UTC_HOUR') {
    return ['(new Date().getUTCHours())', JavaScript.ORDER_NONE];
  } else if (dataType === 'UTC_DAY_OF_WEEK') {
    return ['(new Date().getUTCDay())', JavaScript.ORDER_NONE];
  } else if (dataType === 'UTC_DAY') {
    return ['(new Date().getUTCDate())', JavaScript.ORDER_NONE];
  } else if (dataType === 'UTC_MONTH') {
    return ['(new Date().getUTCMonth())', JavaScript.ORDER_NONE];
  } else if (dataType === 'UTC_YEAR') {
    return ['(new Date().getUTCFullYear())', JavaScript.ORDER_NONE];
  }
};
