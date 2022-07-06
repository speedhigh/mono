<template>
  <div class="pb-10">
    <!-- banner -->
    <div class="w-full h-[18.75rem] relative flex items-center">
      <img :src="banner" alt="about" width="1920" height="300" class="absolute inset-0 w-full h-full object-cover object-left">
      <div class="w-[1200px] mx-auto relative">
        <h1 class="text-4xl text-white">{{ t('message.news') }}</h1>
      </div>
    </div>
    <!-- news -->
    <div class="w-[1200px] mx-auto">
      <base-pagination 
        url="/article/getPage"
        :size="10"
        class="mt-4"
      >
        <template #default="slotProps">
          <div v-for="item in slotProps.list" :key="item.id">
            <base-news-item :id="item.id" :date="item.inserttime" :title="item.title" />
          </div>
        </template>
      </base-pagination>
    </div>
  </div>
</template>

<script setup>
import banner from '/src/assets/images/news/banner.webp'
import emitter from '/src/until/eventbus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
setTimeout(() => emitter.emit('changeLoadingState', false), 100)
</script>