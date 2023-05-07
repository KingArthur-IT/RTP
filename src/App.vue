<script setup>
import MainHeader from '@/components/Header/MainHeader.vue'
import MainFooter from '@/components/Footer/MainFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main-header></main-header>
  <RouterView />
  <main-footer></main-footer>
</template>

<style scoped>

</style>
