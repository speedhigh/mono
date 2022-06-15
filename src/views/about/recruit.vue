<template>
  <div>
    <h2 class="text-4xl">{{ msg.title }}</h2>
    <div v-html="msg.content" class="mt-[3.75rem]" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
const msg = ref({})
api.get('/article/getDetailByTitle', { title: '招聘信息' }).then((res) => {
  Object.assign(msg.value, res.data.data)
})
</script>