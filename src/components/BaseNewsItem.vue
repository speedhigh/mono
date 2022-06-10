<template>
  <div 
    class="py-[1.88rem] flex items-center border-b border-gray-200 cursor-pointer hover:text-primary"
    @click="$router.push('/news/detail/' + props.id)"
  >
    <p>{{ changeDate(props.date) }}</p>
    <div class="ml-6 px-2 py-1.5 bg-primary text-white text-sm rounded">新闻发布</div>
    <p class="ml-8">{{ props.title }}</p>
  </div>
</template>

<script setup>
import { changeDate } from '/src/until/index.js'
const props = defineProps({
  id: { type: Number, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true }
})
</script>