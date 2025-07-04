import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
Blockly.Blocks['jg_encryption_encrypt_text'] = {
  init: function () {
    this.jsonInit({
      message0: '%2 text %1 with key %3',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'encode',
          check: ['String', 'var', 'Env']
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
          check: ['String', 'var', 'Env']
        }
      ],
      colour: 205,
      output: 'String',
      tooltip: 'Encrypt/Decrypt text using the current secret key. The secret key should REALLY be in a process.env block!',
      helpUrl: ''
    });
  }
};

JavaScript['jg_encryption_encrypt_text'] = function (block) {
  const text = JavaScript.valueToCode(block, 'encode', JavaScript.ORDER_ATOMIC);
  const key = JavaScript.valueToCode(block, 'key', JavaScript.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  if (type == 0) {
    return [`S4D_APP_CRYPTOJS.AES.encrypt(${text}, ${key}).toString()`, JavaScript.ORDER_NONE];
  } else {
    return [`S4D_APP_CRYPTOJS.AES.decrypt(${text}, ${key}).toString(S4D_APP_CRYPTOJS.enc.Utf8)`, JavaScript.ORDER_NONE];
  }
};
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
Blockly.Blocks['catsoup_encryption_sha256'] = {
  init: function () {
    this.jsonInit({
      message0: 'encrypt %1 with SHA256',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'encode',
          check: ['String', 'var', 'Env']
        }
      ],
      colour: 205,
      output: 'String',
      tooltip: 'Encrypt some text using SHA256',
      helpUrl: ''
    });
  }
};

JavaScript['catsoup_encryption_sha256'] = function (block) {
  const text = JavaScript.valueToCode(block, 'encode', JavaScript.ORDER_ATOMIC);
  return [`S4D_APP_CRYPTOJS.SHA256(${text})`, JavaScript.ORDER_NONE];
};
