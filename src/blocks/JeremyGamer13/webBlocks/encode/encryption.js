import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

Blockly.Blocks['jg_encryption_encrypt_text'] = {
  init: function () {
    this.jsonInit({
      message0: '%2 text %1 with key %3',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'encode',
          check: Types.String
        },
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['encrypt', '0'],
            ['decrypt', '1']
          ]
        },
        {
          type: 'input_value',
          name: 'key',
          check: Types.String
        }
      ],
      colour: 205,
      output: Types.String,
      tooltip: 'Encrypt/Decrypt text using the current secret key. The secret key should REALLY be in a process.env block!',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_encryption_encrypt_text'] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'encode', javascriptGenerator.ORDER_ATOMIC);
  const key = javascriptGenerator.valueToCode(block, 'key', javascriptGenerator.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  if (type == 0) {
    return [`S4D_APP_CRYPTOJS.AES.encrypt(${text}, ${key}).toString()`, javascriptGenerator.ORDER_NONE];
  } else {
    return [`S4D_APP_CRYPTOJS.AES.decrypt(${text}, ${key}).toString(S4D_APP_CRYPTOJS.enc.Utf8)`, javascriptGenerator.ORDER_NONE];
  }
};

Blockly.Blocks['catsoup_encryption_sha256'] = {
  init: function () {
    this.jsonInit({
      message0: 'encrypt %1 with SHA256',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'encode',
          check: Types.String
        }
      ],
      colour: 205,
      output: Types.String,
      tooltip: 'Encrypt some text using SHA256',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['catsoup_encryption_sha256'] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'encode', javascriptGenerator.ORDER_ATOMIC);
  return [`S4D_APP_CRYPTOJS.SHA256(${text})`, javascriptGenerator.ORDER_NONE];
};
