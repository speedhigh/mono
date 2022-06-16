<template>
  <div>
    <h2 class="text-4xl">{{ msg.title }}</h2>
    <div v-html="msg.content" class="mt-[3.75rem]" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import emitter from '/src/until/eventbus'

const msg = ref({})
api.get('/article/getDetailByTitle', { title: '招聘信息' }).then((res) => {
  setTimeout(() => emitter.emit('changeLoadingState', false), 50)
})
</script>