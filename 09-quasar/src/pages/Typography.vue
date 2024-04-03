<template>
  <q-page class="flex column q-pa-md">

    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator />

    <p class="text-body1">Proident cupidatat labore id occaecat quis dolore duis. Nostrud adipisicing
      ullamco minim tempor est incididunt consequat mollit consectetur minim Lorem do. Aliquip nisi proident eiusmod ex
      aliquip pariatur ex. Dolore id deserunt cillum exercitation ea aliqua aliqua exercitation eiusmod elit
      exercitation irure eu. Aliqua laborum voluptate ex pariatur reprehenderit eiusmod nostrud tempor minim
      exercitation esse excepteur laborum exercitation.</p>
    <p class="text-body2">Proident cupidatat labore id occaecat quis dolore duis. Nostrud adipisicing ullamco minim
      tempor est incididunt consequat mollit consectetur minim Lorem do. Aliquip nisi proident eiusmod ex aliquip
      pariatur ex. Dolore id deserunt cillum exercitation ea aliqua aliqua exercitation eiusmod elit exercitation irure
      eu. Aliqua laborum voluptate ex pariatur reprehenderit eiusmod nostrud tempor minim exercitation esse excepteur
      laborum exercitation.</p>

    <span class="subtitle1">Subtitle 1</span>
    <span class="subtitle2">Subtitle 2</span>

    <span class="text-weight-thin">text-weight thin</span>
    <span class="text-weight-light">text-weight light</span>
    <span class="text-weight-regular">text-weight regular</span>
    <span class="text-weight-medium">text-weight medium</span>
    <span class="text-weight-bold">text-weight bold</span>
    <span class="text-weight-bolder">text-weight bolder</span>

    <q-btn color="primary" :label=" isSideMenuOpen ? 'Cerrar menú lateral' : 'Abrir menú lateral' " class="q-mt-sm" @click="toogleSideMenu" />

  </q-page>
</template>

<script setup>
import useUI from '../composables/useUI';

const { isSideMenuOpen, toogleSideMenu } = useUI()

defineOptions({
  name: 'TypographyPage'
});
</script>
