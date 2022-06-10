<template>
  <div 
    class="relative text-base cursor-default" 
    :class="{'overflow-hidden h-screen': showLoadingPage}"
  >
    <base-loading-page
      v-show="showLoadingPage"
      class="fixed top-0 w-full h-screen z-[200000]"
    />
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emitter from '/src/until/eventbus'
emitter.on('changeLoadingState', (state) => showLoadingPage.value = state)
const showLoadingPage = ref(false)
</script>

<style>
input, button, select, textarea {
  outline: none !important
}
textarea {
  resize: none !important
}
</style>