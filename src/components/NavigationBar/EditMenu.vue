<template>
  <b-nav-item-dropdown :text="$t('edit.title')" right>
    <b-dropdown-item @click="undo">Undo</b-dropdown-item>
    <b-dropdown-item @click="redo">Redo</b-dropdown-item>
    <b-dropdown-item @click="cleanUp">Clean up blocks</b-dropdown-item>
    <b-dropdown-item @click="clear" variant="danger">Delete all blocks</b-dropdown-item>
    <b-dropdown-item @click="clearGhost" variant="danger">Delete unused blocks</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'EditMenu',
  methods: {
    undo() {
      window.blocklyWorkspaceGlobalRef.undo(false);
    },
    redo() {
      window.blocklyWorkspaceGlobalRef.undo(true);
    },
    clearGhost() {
      let allBlocks = window.blocklyWorkspaceGlobalRef.getAllBlocks(false);
      let disabledBlocks = allBlocks.filter((block)=>!block.isEnabled());
      disabledBlocks.forEach(block=>block.dispose());
    },
    clear() {
      window.blocklyWorkspaceGlobalRef.clear();
    },
    cleanUp() {
      window.blocklyWorkspaceGlobalRef.cleanUp();
    },
    clearDB() {
      localStorage.setItem('easyjsondatabase', '{}');
    }
  }
};
</script>
