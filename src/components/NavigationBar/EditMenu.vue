<template>
  <BNavItemDropdown :text="$t('edit.title')" right>
    <BDropdownItem @click="undo">Undo</BDropdownItem>
    <BDropdownItem @click="redo">Redo</BDropdownItem>
    <BDropdownItem @click="cleanUp">Clean up blocks</BDropdownItem>
    <BDropdownItem variant="danger" @click="clear">Delete all blocks</BDropdownItem>
    <BDropdownItem variant="danger" @click="clearGhost">Delete unused blocks</BDropdownItem>
  </BNavItemDropdown>
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
      let disabledBlocks = allBlocks.filter((block) => !block.isEnabled());
      disabledBlocks.forEach((block) => block.dispose());
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
