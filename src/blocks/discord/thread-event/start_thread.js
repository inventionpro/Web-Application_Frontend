import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_start_thread';

const blockData = {
  message0: '%{BKY_CREATE_THREAD}',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
    },
    {
      type: 'field_dropdown',
      name: 'ARCHIVE',
      options: [
        ['%{BKY_THREAD_HOUR}', '60'],
        ['%{BKY_THREAD_DAY}', '1440'],
        ['%{BKY_THREAD_3DAY}', '4320'],
        ['%{BKY_THREAD_WEEK}', '10080']
      ]
    },
    {
      type: 'input_statement',
      name: 'CODE'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'NOTENOUGH'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'field_dropdown',
      name: 'THREADTYPE',
      options: [
        ['Public', 'GUILD_PUBLIC_THREAD'],
        ['Private', 'GUILD_PRIVATE_THREAD']
      ]
    }
  ],
  colour: '#4C97FF',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const archiveAfter = block.getFieldValue('ARCHIVE');
  const threadType = block.getFieldValue('THREADTYPE');
  const code = javascriptGenerator.statementToCode(block, 'CODE');
  const catchd = javascriptGenerator.statementToCode(block, 'NOTENOUGH');
  return `${channel}.threads.create({name: ${name}, autoArchiveDuration: ${archiveAfter}, type: '${threadType}'})
    .then(async s4dCreatedThread => {
        ${code}
    })
    .catch(async s4dThreadErr => {if (String(s4dThreadErr) === 'DiscordAPIError: Guild premium subscription level too low'){
        ${catchd}
    }});
    `;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CHANNEL',
    types: ['CHANNEL']
  }
]);
