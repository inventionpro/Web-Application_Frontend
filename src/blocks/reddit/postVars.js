import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../types.js';

const blockName = 'postVars';
const blockData = {
  message0: '%1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['Post Title', '.title'],
        ['Post Image', '.reddit_url'],
        ['Post URL', '.media_url'],
        ['Post Upvotes', '.upvotes'],
        ['Post Comments', '.comments'],
        ['All data (object)', 'nulloolelaler']
      ]
    }
  ],
  colour: '#5ba58b',
  output: T(Types.String, Types.Object), // im lazy and dont want to register a validator just so it can chanje type when you select a single specific item
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const stats = block.getFieldValue('INFO');
  return [`result${stats}`.replace('nulloolelaler', ''), javascriptGenerator.ORDER_NONE];
};
