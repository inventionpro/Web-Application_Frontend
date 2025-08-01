import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_set_channel_nsfw';

const blockData = {
  message0: '%1 NSFW tag on channel %2 with reason %3',
  inputsInline: true,
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['set', 'true'],
        ['remove', 'false']
      ]
    },
    {
      type: 'input_value',
      name: 'channel',
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
  tooltip: 'Set or remove the nsfw tag to/from a channel.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const channel = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  let reason = JavaScript.valueToCode(block, 'reason', JavaScript.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE'); // this is the dropdown
  // the dropdown options are NAMED with true or false so that you dont need to do checks on them
  if (String(reason) != null && String(reason) != '') reason = ', ' + reason;
  else reason = '';
  return `${channel}.setNSFW(${type}${reason})\n`;
};
