import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'create_chart';

const blockData = {
  type: 'create_chart',
  message0: 'Create a new chart with %1 Type %2 %3 Label %4 Labels (X axis) %5 Data %6',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'field_dropdown',
      name: 'typee',
      options: [
        ['Bar', 'bar'],
        ['Line', 'line'],
        ['Radar', 'radar'],
        ['Pie', 'pie'],
        ['Horizontal Bar', 'horizontalBar'],
        ['Dough Nut', 'doughnut'],
        ['Polar Area', 'polarArea']
      ]
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'label',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'labels',
      check: 'Array'
    },
    {
      type: 'input_value',
      name: 'data',
      check: 'Array'
    }
  ],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: 75,
  tooltip: 'Create a chart',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['create_chart'] = (block) => {
  var dropdown_typee = block.getFieldValue('typee');
  var value_label = javascriptGenerator.valueToCode(block, 'label', javascriptGenerator.ORDER_ATOMIC);
  var value_labels = javascriptGenerator.valueToCode(block, 'labels', javascriptGenerator.ORDER_ATOMIC);
  var value_data = javascriptGenerator.valueToCode(block, 'data', javascriptGenerator.ORDER_ATOMIC);
  var code = `const chart = ChartJSImage().chart({
  type: '${dropdown_typee}',
  data: {
    labels: ${value_labels},
    datasets: [{
      label: ${value_label},
      data: ${value_data}
    }]
  }
});`;
  return code;
};
