import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'monaco_toggle_follow_channel';

const blockData = {
  message0: 'follow channel %1 to channel %2 with reason %3',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'togglechannel',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'locationchannel',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'reason',
      check: 'String'
    }
  ],
  colour: '#0c97f0',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Follow news channels.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_togglechannel = javascriptGenerator.valueToCode(block, 'togglechannel', javascriptGenerator.ORDER_ATOMIC);
  var value_locationchannel = javascriptGenerator.valueToCode(block, 'locationchannel', javascriptGenerator.ORDER_ATOMIC);
  var value_reason = javascriptGenerator.valueToCode(block, 'reason', javascriptGenerator.ORDER_ATOMIC);
  var code = ` ${value_togglechannel}.addFollower(${value_locationchannel}, String(${value_reason}))
`;
  return code;
};
