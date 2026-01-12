import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const info = block.getFieldValue('INFO');
  if (info == 'sysUptime') {
    const code = [`miliConverter.secsMinsHoursDays((os.sysUptime() * 1000), "string")`, javascriptGenerator.ORDER_NONE];
    return code;
  } else {
    const code = [`os.${info}()`, javascriptGenerator.ORDER_NONE];
    return code;
  }
};
