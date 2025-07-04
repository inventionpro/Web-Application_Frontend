import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'frost_translate';

const blockData = {
  message0: 'Translate %1 to %2 and save translation to variable %3',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    },
    {
      type: 'field_dropdown',
      name: 'LANG',
      options: [
        ['English', 'en'],
        ['Spanish', 'es'],
        ['French', 'fr'],
        ['Portuguese', 'pt']
      ]
    },
    {
      type: 'input_value',
      name: 'VAR',
      check: 'Message'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#5ba58b',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  const lang = JavaScript.valueToCode(block, 'LANG', JavaScript.ORDER_ATOMIC);
  const vari = JavaScript.valueToCode(block, 'VAR', JavaScript.ORDER_ATOMIC);

  const code = [`translate(${key}, {to: '${lang}'}).then(res => { ${vari}; }).catch(err => { console.error(err) })`, JavaScript.ORDER_ATOMIC];
  return code;
};
