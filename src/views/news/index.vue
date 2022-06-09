<template>
  <div class="py-10 px-[22.5rem]">
    <div class="w-full h-[18.75rem] rounded bg-gray-400 mb-3"></div>
    <div v-for="i in 10" :key="i">
      <base-news-item :id="i + ''" date="2020年03月13日" title="新型コロナウイルス感染拡大防止のためのカスタマーサポート窓口体制について" />
    </div>
  </div>
</template>

<script setup>
</script>