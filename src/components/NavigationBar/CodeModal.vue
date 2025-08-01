<script setup>
function closeCodeModal() {
  document.getElementById('code-modal')?.close()
}
</script>

<template>
  <dialog ref="codeModal" id="code-modal">
    <h2>JavaScript code of your bot</h2>
    <code class="language-js">
      <textarea disabled :value="content" id="code_TextArea_element_exporting_code"> </textarea>
    </code>
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
      return beautify.js(this.getWorkspaceCode(), {
        indent_size: 2,
        space_in_empty_paren: true
      });
    }
  },
  methods: {
    copy() {
      var url = beautify.js(this.getWorkspaceCode(), {
        indent_size: 2,
        space_in_empty_paren: true
      });
      navigator.clipboard.writeText(url);
    }
  }
};
/*
i did the hard work of adding prism, now someone else needs to get it working because i have no clue how lol
heres some code i made but it doesnt work on text areas
works fine otherwise

window.addEventListener("click", () => {
    const Prism = window.Prism
    if (!Prism) return
    const codearea = document.getElementById("code_TextArea_element_exporting_code")
    if (!codearea) return
    const highlight = Prism.highlight(codearea.value, Prism.languages.javascript, 'javascript');
    document.getElementById("temporary thing wow").innerHTML = highlight
})
*/
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
  text-shadow: 7px 5px 5px black;
}
#code-modal code {
  flex: 1;
}
#code-modal textarea {
  width: 100%;
  height: 100%;
  resize: none;
  background-color: #ffffffe6 !important;
}
#code-modal div {
  display: flex;
  gap: 5px;
  margin: 5px 0px;
}
#code-modal textarea::-webkit-scrollbar {
  width: 12px;
  background: #f1f1f1;
}
</style>
