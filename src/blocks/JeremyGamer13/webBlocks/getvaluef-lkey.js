import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_web_valueofflkey';

const blockData = {
  message0: 'Value of %1 key in data file',
  args0: [
    {
      type: 'field_dropdown',
      name: 'key',
      options: [
        ['first', '0'],
        ['last', 'null']
      ]
    }
  ],
  output: null,
  colour: 230,
  tooltip: 'Get the value of the first or last key in a JSON file.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  // stuff    return `fs.readFileSync(` + fileName + `, 'utf8')`;
  const key = block.getFieldValue('key');
  if (Number(key) === 0) {
    const code = [`Object.keys(JSONdataS4D)[0]`, JavaScript.ORDER_NONE];
    return code;
  } else {
    const code = [`Object.keys(JSONdataS4D)[((Object.keys(JSONdataS4D).length) - 1)]`, JavaScript.ORDER_NONE];
    return code;
  }
};
