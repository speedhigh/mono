<template>
  <div class="py-10 w-[1200px] mx-auto">
    <!-- banner -->
    <img :src="banner" width="1200" height="300" alt="banner" class="w-full h-[18.75rem] rounded mb-3 shadow">
    <!-- news -->
    <base-pagination :size="10" url="/article/getPage" class="mt-4">
      <template #default="slotProps">
        <div v-for="item in slotProps.list" :key="item.id">
          <base-news-item :id="item.id" :date="item.inserttime" :title="item.title" />
        </div>
      </template>
    </base-pagination>
  </div>
</template>

<script setup>
import banner from '/src/assets/images/news/banner.jpg'
import emitter from '/src/until/eventbus'
setTimeout(() => emitter.emit('changeLoadingState', false), 100)
</script>