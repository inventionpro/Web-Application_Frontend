import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'video_raw';

const blockData = {
  message0: '%1 of video',
  args0: [
    {
      type: 'field_dropdown',
      name: 'SEARCH_TYPE',
      options: [
        ['channel name', 'channelName'],
        ['title', 'title'],
        ['publish Date', 'publishDate'],
        ['url', 'url'],
        ['id', 'id']
      ]
    }
  ],
  output: 'String',
  colour: '#5BA58C',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const searchType = block.getFieldValue('SEARCH_TYPE');
  let searchType2 = searchType.replace("'", '');
  let s = searchType2.replace("'", '');
  const code = [`video.${s}`, JavaScript.ORDER_NONE];
  return code;
};
