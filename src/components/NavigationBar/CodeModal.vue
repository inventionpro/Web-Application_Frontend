<script setup>
function closeCodeModal() {
  document.getElementById('code-modal')?.close();
}
</script>

<template>
  <dialog ref="codeModal" id="code-modal">
    <h2>JavaScript code of your bot</h2>
    <code class="language-js" v-html="content"></code>
    <div>
      <b-button @click="closeCodeModal">Close</b-button>
      <b-button @click="copy" variant="primary">Copy to Clipboard</b-button>
    </div>
  </dialog>
</template>

<script>
import beautify from 'js-beautify';

export default {
  name: 'CodeModal',
  computed: {
    content: function () {
      const Prism = window.Prism;
      let code = this.getWorkspaceCode();
      code = beautify.js(code, {
        indent_size: 2,
        max_preserve_newlines: 2,
        preserve_newlines: true,
        break_chained_methods: true,
        brace_style: 'collapse,preserve-inline',
        space_before_conditional: true,
        space_in_empty_paren: true
      });
      if (Prism) {
        code = Prism.highlight(code, Prism.languages.javascript, 'javascript');
      }
      return code;
    }
  },
  methods: {
    copy() {
      var url = beautify.js(this.getWorkspaceCode(), {
        indent_size: 2,
        max_preserve_newlines: 2,
        preserve_newlines: true,
        break_chained_methods: true,
        brace_style: 'collapse,preserve-inline',
        space_before_conditional: true,
        space_in_empty_paren: true
      });
      navigator.clipboard.writeText(url);
    }
  }
};
</script>

<style>
#code-modal {
  width: 100dvw;
  height: 100dvh;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100000;
  box-sizing: content-box;
}
#code-modal[open] {
  display: flex;
  flex-direction: column;
}
#code-modal h2 {
  color: white;
  user-select: none;
  text-shadow: 7px 5px 5px black;
}
#code-modal code {
  flex: 1;
  width: 100%;
  height: 100%;
  color: #ccc;
  font-family: inherit;
  line-height: 1.3;
  white-space: break-spaces;
  overflow: auto;
  border-radius: 5px;
  background-color: #222;
}
#code-modal code::-webkit-scrollbar {
  width: 12px;
  background: inherit;
}
#code-modal code::-webkit-scrollbar-thumb {
  border-radius: 1rem;
}
#code-modal div {
  display: flex;
  gap: 5px;
  margin: 5px 0px;
}
</style>
