import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../types.js';

const blockName = 'ps_os_stats';
const blockData = {
  message0: '%1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['Operating System', 'platform'],
        ['Server Uptime', 'sysUptime'],
        ['Free Memory', 'freemem'],
        ['Total Memory', 'totalmem']
      ]
    }
  ],
  output: T(Types.String, Types.Number),
  colour: '#a5745b',
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
  if (info == 'sysUptime') return [`miliConverter.secsMinsHoursDays((os.sysUptime() * 1000), "string")`, javascriptGenerator.ORDER_NONE];
  return [`os.${info}()`, javascriptGenerator.ORDER_NONE];
};
