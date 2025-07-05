import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'initialize_dashboard';

const blockData = {
  type: 'initialize_dashboard',
  message0: 'Create a new dashboard with %1 Name %2 Description %3 Support server URL %4 Bot Invite URL %5 Dashboard URL %6 Port %7 No Port In CallBack URL %8 Client Secret %9 Log Requests %10 Inject CSS %11 Icon Path %12 Theme %13 %14 %15 Permissions required to access the dashboard %16 Add fields %17 Add commands to the commands list page %18 Session %19',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'description',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'support_server_url',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'bot_invite_url',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'base_url',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'port',
      check: 'Number'
    },
    {
      type: 'input_value',
      name: 'noPortIncallbackUrl',
      check: 'Boolean'
    },
    {
      type: 'input_value',
      name: 'secret',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'logRequests',
      check: 'Boolean'
    },
    {
      type: 'input_value',
      name: 'injectCSS'
    },
    {
      type: 'input_value',
      name: 'favicon_path',
      check: 'String'
    },
    {
      type: 'field_dropdown',
      name: 'theme',
      options: [
        ['Light', 'light'],
        ['Dark', 'dark'],
        ['Custom...', 'custom']
      ]
    },
    {
      type: 'field_input',
      name: 'requiree',
      text: 'Theme package name'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'permissions',
      check: 'Array'
    },
    {
      type: 'input_statement',
      name: 'FIELDS'
    },
    {
      type: 'input_statement',
      name: 'REGISTER_COMMANDS'
    },
    {
      type: 'input_statement',
      name: 'cooki'
    }
  ],
  inputsInline: false,
  colour: 0,
  tooltip: 'Create a new dashboard',
  helpUrl: 'https://github.com/SimonLeclere/discord-easy-dashboard/blob/HEAD/docs/gettingStarted.md'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['initialize_dashboard'] = function (block) {
  var value_name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  var value_description = JavaScript.valueToCode(block, 'description', JavaScript.ORDER_ATOMIC);
  var value_support_server_url = JavaScript.valueToCode(block, 'support_server_url', JavaScript.ORDER_ATOMIC);
  var value_bot_invite_url = JavaScript.valueToCode(block, 'bot_invite_url', JavaScript.ORDER_ATOMIC);
  var value_base_url = JavaScript.valueToCode(block, 'base_url', JavaScript.ORDER_ATOMIC);
  var value_port = JavaScript.valueToCode(block, 'port', JavaScript.ORDER_ATOMIC);
  var value_noportincallbackurl = JavaScript.valueToCode(block, 'noPortIncallbackUrl', JavaScript.ORDER_ATOMIC);
  var value_secret = JavaScript.valueToCode(block, 'secret', JavaScript.ORDER_ATOMIC);
  var value_logrequests = JavaScript.valueToCode(block, 'logRequests', JavaScript.ORDER_ATOMIC);
  var value_injectcss = JavaScript.valueToCode(block, 'injectCSS', JavaScript.ORDER_ATOMIC);
  var value_favicon_path = JavaScript.valueToCode(block, 'favicon_path', JavaScript.ORDER_ATOMIC);
  var dropdown_theme = block.getFieldValue('theme');
  var text_requiree = block.getFieldValue('requiree');
  var value_permissions = JavaScript.valueToCode(block, 'permissions', JavaScript.ORDER_ATOMIC);
  var statements_fields = JavaScript.statementToCode(block, 'FIELDS');
  var statements_register_commands = JavaScript.statementToCode(block, 'REGISTER_COMMANDS');
  var statements_cooki = JavaScript.statementToCode(block, 'cooki');
  var code;

  if (dropdown_theme == 'custom') {
    if (statements_cooki == 'null' || statements_cooki == '') {
      code = `
    s4d.client.dashboard = new Dashboard(s4d.client, {
        name: ${value_name},
        description: ${value_description},
        serverUrl: ${value_support_server_url},
        inviteUrl: ${value_bot_invite_url},
        baseUrl: ${value_base_url},
        port: ${value_port},
        noPortIncallbackUrl: ${value_noportincallbackurl},
        secret: ${value_secret},
        logRequests: ${value_logrequests},
        injectCSS: ${value_injectcss},
        faviconPath: ${value_favicon_path},
        theme: require('${text_requiree}'),
        permissions: ${value_permissions},
    });

        // fields
        ${statements_fields}

        // commands
        ${statements_register_commands}
`;
    } else {
      code = `
    ${statements_cooki}

    s4d.client.dashboard = new Dashboard(s4d.client, {
        name: ${value_name},
        description: ${value_description},
        serverUrl: ${value_support_server_url},
        inviteUrl: ${value_bot_invite_url},
        baseUrl: ${value_base_url},
        port: ${value_port},
        noPortIncallbackUrl: ${value_noportincallbackurl},
        secret: ${value_secret},
        logRequests: ${value_logrequests},
        injectCSS: ${value_injectcss},
        faviconPath: ${value_favicon_path},
        theme: require('${text_requiree}'),
        permissions: ${value_permissions},
        session: sessionObject,
    });

        // fields
        ${statements_fields}

        // commands
        ${statements_register_commands}
`;
    }
  }

  // -----------------------------------------------------------
  else {
    if (statements_cooki == 'null' || statements_cooki == '') {
      code = `
    s4d.client.dashboard = new Dashboard(s4d.client, {
        name: ${value_name},
        description: ${value_description},
        serverUrl: ${value_support_server_url},
        inviteUrl: ${value_bot_invite_url},
        baseUrl: ${value_base_url},
        port: ${value_port},
        noPortIncallbackUrl: ${value_noportincallbackurl},
        secret: ${value_secret},
        logRequests: ${value_logrequests},
        injectCSS: ${value_injectcss},
        faviconPath: ${value_favicon_path},
        theme: '${dropdown_theme}',
        permissions: ${value_permissions},
    });

        // fields
        ${statements_fields}

        // commands
        ${statements_register_commands}
`;
    } else {
      code = `
    ${statements_cooki}

    s4d.client.dashboard = new Dashboard(s4d.client, {
        name: ${value_name},
        description: ${value_description},
        serverUrl: ${value_support_server_url},
        inviteUrl: ${value_bot_invite_url},
        baseUrl: ${value_base_url},
        port: ${value_port},
        noPortIncallbackUrl: ${value_noportincallbackurl},
        secret: ${value_secret},
        logRequests: ${value_logrequests},
        injectCSS: ${value_injectcss},
        faviconPath: ${value_favicon_path},
        theme: '${dropdown_theme}',
        permissions: ${value_permissions},
        session: sessionObject,
    });

        // fields
        ${statements_fields}

        // commands
        ${statements_register_commands}
`;
    }
  }

  return code;
};
