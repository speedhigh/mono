<template>
  <div>
    <div class="border-b-[0.13rem] border-gray-500 flex items-center pb-6 relative mb-7 cursor-default">
      <h2 class="text-[2rem]">{{ t('message.newsPublish') }}</h2>
      <div class="ml-auto text-5xl text-gray-200 font-bold">NEWS</div>
      <div class="absolute bottom-0 w-20 h-1.5 bg-primary z-10"></div>
    </div>
    <div v-for="item in newsList" :key="item.id">
      <base-news-item :id="item.id" :date="item.inserttime" :title="item.title" />
    </div>
    <div v-if="props.showBtn" class="text-center">
      <el-button type="primary" class="mt-14 min-w-[15rem] h-[3.38rem]" size="large" @click="$router.push('/news/list')">{{ t('message.seeAll') }}</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'
import api from '/src/api/index.js'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  showBtn: Boolean
})
const { t } = useI18n()
const newsList = ref([])
if(!sessionStorage.getItem("newsList")) {
  api.get('/index/getArticle').then((res) => {
    if(res.data.code === 20000) {
      newsList.value = res.data.data
      sessionStorage.setItem("newsList", JSON.stringify(res.data.data))
    }
  })
} else {
  newsList.value = JSON.parse(sessionStorage.getItem("newsList"))
}
</script>