<template>
  <b-nav-item-dropdown :text="$t('toolbox.title')" right>
    <b-dropdown-item @click="hide">{{ $t('toolbox.hide') }}</b-dropdown-item>
    <b-dropdown-item @click="show">{{ $t('toolbox.show') }}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'filemenu',
  methods: {
    hide() {
      window.blocklyWorkspaceGlobalRef.getToolbox().setVisible(false);
    },
    show() {
      window.blocklyWorkspaceGlobalRef.getToolbox().setVisible(true);
    }
  }
};
</script>
