<template>
  <div>
    <div class="border-b px-[22.5rem] pt-14 pb-[1.88rem]">
      <h1 class="text-center text-[2rem] font-bold">{{ news.title }}</h1>
      <div class="mt-8 flex items-center justify-end space-x-[1.88rem]">
        <button class="px-2 leading-6 bg-primary text-white text-sm rounded">新闻资讯</button>
        <p class="text-base ">発表日：{{ changeDate(news.inserttime) }}</p>
      </div>
    </div>
    <div class="px-[22.5rem] py-12">
      <div v-html="news.content"></div>
    </div>
    <!-- new -->
    <div class="mt-3 px-[22.5rem] pb-20">
      <base-news />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import { useRoute } from 'vue-router'
import { changeDate } from '/src/until/index.js'
const route = useRoute()
const news = ref({})
api.get('/article/getDetail', { id:  route.params.id}).then((res) => {
  Object.assign(news.value, res.data.data)
})
</script>