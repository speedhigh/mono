<template>
  <div class="mx-[22.5rem] pt-14">
    <h1 class="text-center text-[2rem] font-bold">{{ news.title }}</h1>
    <div class="mt-8 flex items-center justify-end">
      <p class="text-base ">発表日：{{ news.inserttime }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const news = ref({})
api.get('/article/getDetail', { id:  route.params.id}).then((res) => {
  Object.assign(news.value, res.data.data)
})
</script>