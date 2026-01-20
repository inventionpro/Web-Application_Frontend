<template>
  <BNavItemDropdown :text="$t('lang.title')" right>
    <BDropdownItem @click="changeLanguage('en')">English (EN)</BDropdownItem>
    <BDropdownItem @click="changeLanguage('fr')">Français (FR)</BDropdownItem>
    <BDropdownItem @click="changeLanguage('pt')">Português (PT)</BDropdownItem>
  </BNavItemDropdown>
</template>

<script>
export default {
  name: 'LanguageMenu',
  methods: {
    changeLanguage(locale) {
      this.$store.commit('setLocale', {
        newLocale: locale
      });
      this.setLanguage(locale);
      this.reloadWorkspace();
    }
  }
};
</script>
