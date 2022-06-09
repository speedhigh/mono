<template>
  <div 
    class="py-[1.88rem] flex items-center border-b border-gray-200 cursor-pointer hover:text-primary"
    @click="$router.push('/news/detail/' + props.id)"
  >
    <p>{{ dateChange(date) }}</p>
    <div class="ml-6 px-2 py-1.5 bg-primary text-white text-sm rounded">新闻发布</div>
    <p class="ml-8">{{ props.title }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: Number || String, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true }
})
const dateChange = function(d) {
  let oldDate = new Date(d)
  let newDate = oldDate.getFullYear() + "-" + (oldDate.getMonth() + 1 < 10 ? "0" + (oldDate.getMonth() + 1) : oldDate.getMonth() + 1) + "-" + (oldDate.getDate() < 10 ? "0" + oldDate.getDate() : oldDate.getDate()) + " "
  return newDate
}

// let now = new Date(props.date)
// let nowStr = now.getFullYear() + "-"
//  + (now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1) + "-"
//  + (now.getDate() < 10 ? "0" + now.getDate() : now.getDate()) + " "
</script>