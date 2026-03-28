import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
import { Types } from '../../../types.js';

const blockName = 'save_api_code';
const blockData = {
  type: 'block_type',
  message0: 'Save Converted File',
  args0: [],
  colour: '#0EB22B',
  tooltip: 'Save the converted file onto your bot.',
  helpUrl: '',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return `job = await cloudConvert.jobs.wait(job.id); // Wait for job completion

const exportTask = job.tasks.filter(
  task => task.operation === 'export/url' && task.status === 'finished'
)[0];
const file = exportTask.result.files[0];
ahqfs.writeFile(file.filename, "[]", function (err) {
  if (err) {
    console.log(err);
    return;
  }
});
const writeStream = ahqfs.createWriteStream(file.filename);

https.get(file.url, (response) => {
  response.pipe(writeStream);
});

await new Promise((resolve, reject) => {
  writeStream.on('finish', resolve);
  writeStream.on('error', reject);
});`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MISSING_AHQ_SUPER_CONTENT',
    types: ['convert_api_task']
  }
]);
