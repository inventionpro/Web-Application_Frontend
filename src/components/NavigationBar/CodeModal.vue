<template>
  <dialog id="code-modal" ref="codeModal">
    <h2>JavaScript code of your bot</h2>
    <code class="language-js" />
    <div>
      <BButton @click="closeCodeModal">Close</BButton>
      <BButton variant="primary" @click="copy">Copy to Clipboard</BButton>
    </div>
  </dialog>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue';
import beautify from 'js-beautify';

export default {
  name: 'CodeModal',
  setup() {
    const { proxy } = getCurrentInstance();
    const codeModal = ref(null);
    onMounted(() => {
      codeModal.value.show = () => {
        proxy.show(codeModal.value.querySelector('code'));
        codeModal.value.showModal();
      };
    });

    function closeCodeModal() {
      document.getElementById('code-modal')?.close();
    }

    return { codeModal, closeCodeModal };
  },
  methods: {
    show(modal) {
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
      modal.innerHTML = code;
    },
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
