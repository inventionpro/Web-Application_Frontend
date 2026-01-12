import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_minecraft_java_version';

const blockData = {
  message0: 'java server version',
  args0: [],
  colour: 120,
  output: 'String',
  tooltip: "Get the game version of the server. Sometimes isn't just a version number.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`result_java.version.name`, javascriptGenerator.ORDER_NONE];
  return code;
};
