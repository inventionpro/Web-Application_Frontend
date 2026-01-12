import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'load_cookie';

const blockData = {
  message0: 'cookie',
  colour: '#0EB22B',
  tooltip: 'Load cookies in dash',
  helpUrl: '',
  output: 'ahq_cookie'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = function () {
  const code = [`cookies_config`, javascriptGenerator.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'blockexists',
    message: 'RES_MISSING_AHQ_DASH_CONTENT',
    types: ['make_cookie']
  }
]);
