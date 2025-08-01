import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

export const OutputType = {
  STRING: ['String', 'Text'],
  TEXT: ['String', 'Text'],
  NUMBER: ['Number'],
  BOOLEAN: ['Boolean', 'Bool'],
  BOOL: ['Boolean', 'Bool'],
  LIST: ['List', 'Array'],
  ARRAY: ['List', 'Array'],
  OBJECT: ['Object', 'JSON']
};
export function createBlock(data) {
  // data = {
  //     id: "blobkaname",
  //     text: "among us [DUMMY] [TROLOLO]",
  //     color: "#ff0000",
  //     tooltip: "abc",
  //     url: "abc",
  //     output: module.exports.OutputType.STRING,
  //     inline: true,
  //     hidden: false,
  //     inputs: {
  //         DUMMY: { type: "input_dummy" },
  //         TROLOLO: { type: "input_value", check: module.exports.OutputType.STRING }
  //     },
  //     export: (block, args) => {
  //         return `banana ${args.TROLOLO}`
  //     }
  // }
  if (!data.id) throw new Error('Block ID cannot be undefined');
  if (!data.text) throw new Error('Block text cannot be undefined');
  const inputNames = [];
  let i = 0;
  const message = String(data.text).replace(/(\[\S+\])+/gim, (match) => {
    i++;
    inputNames.push(String(match).replace(/[\[\]]*/gim, ''));
    return '%' + i;
  });
  const argumentss = [];
  inputNames.forEach((name) => {
    argumentss.push({
      type: data.inputs[name].type,
      check: data.inputs[name].check,
      options: data.inputs[name].options,
      name: name
    });
  });
  Blockly.Blocks[data.id] = {
    init: function () {
      this.jsonInit(
        data.floating == true
          ? {
              message0: message,
              args0: argumentss,
              inputsInline: data.inline,
              colour: data.color,
              output: data.output,
              tooltip: data.tooltip ? data.tooltip : '',
              helpUrl: data.url ? data.url : ''
            }
          : {
              message0: message,
              args0: argumentss,
              inputsInline: data.inline,
              colour: data.color,
              output: data.output,
              previousStatement: null,
              nextStatement: null,
              tooltip: data.tooltip ? data.tooltip : '',
              helpUrl: data.url ? data.url : ''
            }
      );
    },
    isHiden: data.hidden
  };
  JavaScript[data.id] = function (block) {
    const args = {};
    inputNames.forEach((input) => {
      switch (data.inputs[input].type) {
        case 'input_value':
          args[input] = JavaScript.valueToCode(block, input, JavaScript.ORDER_ATOMIC);
          break;
        case 'input_statement':
          args[input] = JavaScript.statementToCode(block, input);
          break;
        case 'input_dummy':
          args[input] = '';
          break;
        default:
          args[input] = block.getFieldValue(input);
          break;
      }
    });
    if (data.output == null) return data.export(block, args);
    return [data.export(block, args), JavaScript.ORDER_NONE];
  };
}
