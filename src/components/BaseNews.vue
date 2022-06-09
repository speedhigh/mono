<template>
  <div>
    <div class="border-b-[0.13rem] border-gray-500 flex items-center pb-6 relative mb-7 cursor-default">
      <h2 class="text-[2rem]">新闻发布</h2>
      <div class="ml-auto text-5xl text-gray-200 font-bold">NEWS</div>
      <div class="absolute bottom-0 w-20 h-1.5 bg-primary z-10"></div>
    </div>
    <div v-for="i in 4" :key="i">
      <base-news-item :id="i + ''" date="2020年03月13日" title="新型コロナウイルス感染拡大防止のためのカスタマーサポート窓口体制について" />
    </div>
    <div class="text-center">
      <el-button type="primary" class="mt-14 w-60 h-[3.38rem]" size="large">查看全部</el-button>
    </div>
  </div>
</template>

<script setup>
// import BaseNewsItem from './BaseNewsItem.vue'
</script>