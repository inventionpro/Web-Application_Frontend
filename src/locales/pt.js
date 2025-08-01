import * as Blockly from 'blockly/core';

import blocklyMessages from './pt-BR.json';

export const applyBlocklyLocale = () => {
  for (let key in blocklyMessages) {
    Blockly.Msg[key] = blocklyMessages[key];
  }
};

export const websiteMessages = {
  untitled: 'Documento sem nome',
  help: 'Ajuda',
  load: {
    error: 'O arquivo enviado está corrompido e não pode ser carregado pelo Scratch For Discord...'
  },
  token: {
    title: 'Token Database',
    load: 'Carregar Token',
    save: 'Salva Token Como...',
    text2: 'nome do token que você quer salva na Database',
    save2: 'procimo',
    error: 'error ja tem um token com esse nome',
    text3: 'token que você quer salva',
    save3: 'salvar',
    success: 'salvado token com sucesso! nome ',
    erros: 'você não tem tokens salvo na database!',
    load2: 'carregar token',
    text4: 'escolha um token para carregar!',
    cancels: 'cancelar',
    loadss: 'carregar',
    successs: 'carregado token com sucesso!(o token esta no teu copiar)',
    delete: 'Deletar Token Na Database',
    all: 'tando de tokens: {blockCount}',
    deletee: {
      title: 'deletar token',
      success: 'deletado token com sucesso!',
      load: 'deletar',
      cancel: 'cancelar',
      text: 'escolha um token para deletar da database'
    }
  },
  file: {
    copy: 'Copiar codigo javascript',
    title: 'Arquivo',
    javascript: 'Exporta para javascirpt',
    open: 'abrir arquivo...',
    save: 'Salva'
  },
  toolbox: {
    title: 'Toolbox',
    hide: 'Esconder',
    show: 'Mostrar'
  },
  edit: {
    title: 'Edita',
    undo: 'desfazer',
    redo: 'refazer',
    clear: 'deleta {blockCount} blocos',
    cleanup: 'limpa blocos',
    cleardb: 'limpa database',
    clearGhost: 'deletar blocos fantasmas'
  },
  lang: {
    title: 'linguagem'
  },
  examples: {
    title: 'Exemplos',
    confirm: {
      title: 'Deleta os blocos atual?',
      text: 'Você gostaria de remover os blocos do projeto atual antes de importar o exemplo?',
      cancel: 'Cancela',
      yes: 'Sim',
      no: 'Não'
    },
    loaded: 'Exemplo {example} importando com sucesso!',
    ping_pong: 'comando ping-pong',
    command_parsing: 'handler de comandos',
    leveling: 'XP e sistema de níveis',
    button: 'Butão e lista de butão',
    music: 'exemplo de blocos de musica',
    image_gen: 'Exemplo de gerador de imagem',
    economy: 'Exemplo de economia',
    aki: 'Exemplo de Akinator',
    backup: 'Exemplo de backup',
    random: 'Exemplo de resposta aleatória',
    reddit: 'reddit'
  },
  download: {
    title: 'Instale o seu bot',
    content: {
      title: 'Como iniciar o seu bot depois de baixado?',
      unzipFile: 'Descompacte o arquivo baixado.',
      node: 'Instale o NPM e o Node.js (pesquise tutoriais no Google)',
      start: "Execute 'npm install' e 'npm start' em um terminal",
      done: 'Seu bot foi iniciado!'
    },
    cancel: 'Cancela',
    confirm: 'Instala'
  },
  tour: {
    skip: 'Pular tour',
    previous: 'Anterior',
    next: 'Próximo',
    finish: 'Termina',
    steps: {
      load_examples: 'Importe exemplos para descobrir Scratch4Discord!',
      run_test: 'Teste as funcionalidades do seu bot aqui!',
      export_code: 'Exporte seu código aqui!'
    }
  },
  warnings: {
    login_block: 'O bloco "Conectar ao Discord" na categoria "Base" é obrigatório.'
  },
  run_modal: {
    title: 'Clique em Iniciar para testar seu bot!',
    start: 'Inicie o bot',
    stop: 'Pare o bot',
    invalid_token: "Unable to connect to Discord... Maybe the bot's token isn't valid!",
    error: 'Incapaz de conectar ao Discord ... Talvez o token do bot não seja válido!',
    disabled: '⚠️ Este recurso está disponível apenas usando o aplicativo Scratch For Discord (pegue ele {here})',
    here: 'aqui'
  },
  code_modal: {
    title: 'Código JavaScript do seu bot'
  },
  autosave: {
    cancell: 'cancela',
    confirm: 'confirma',
    title: 'auto save',
    text: 'seu save foi carregado!',
    title2: 'eu encontrei um auto save de um projeto! você quer carregar ele?'
  },
  save: {
    title: 'auto save'
  },
  prebuild: {
    title: 'Pre Builds',
    load: 'Carregar Pre Build',
    save: 'Salvar Pre Build como...',
    text2: 'nome do Pre Build quer você quer salvar',
    save2: 'salvar',
    error: 'error tem um Pre Build ja com esse nome',
    text3: 'Pre Build que você quer salvar',
    save3: 'salvar',
    success: 'salvado com sucesso o seu Pre Build com nome ',
    erros: 'você não tem nenhum Pre Build na database!',
    load2: 'carregar Pre Build',
    text4: 'escolha um Pre Build para carregar!',
    cancels: 'cancelar',
    loadss: 'carregar',
    successs: 'Pre Build carregado com sucesso!',
    all: 'amount of Pre Build: {blockCount}',
    delete: 'deletar Pre Build na database',
    deletee: {
      title: 'deletar Pre Build',
      success: 'deletado Pre Build com sucesso da database!',
      load: 'deletar',
      cancel: 'cancelar',
      text: 'escolher um Pre Build para deletar'
    },
    download: {}
  }
};

export default {
  applyBlocklyLocale,
  websiteMessages
};
