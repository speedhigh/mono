<template>
  <main>
    <section class="px-[25.5rem] border-b-[0.5rem] border-b-primary">
      <div class="py-20 flex justify-center space-x-[3.75rem]">
        <img :src="info.thumbnail" :alt="info.title" width="402" height="402" class="flex-shrink-0 rounded w-[402px] h-[402px]">
        <div class="flex-grow">
          <button class="h-10 border border-primary rounded leading-9 text-primary text-center px-4 cursor-default">{{ info.series }}</button>
          <h1 class="mt-7 text-[2rem] font-bold line-1">{{ info.title }}</h1>
          <p class="mt-4 text-2xl font-bold">{{ info.clazz }}</p>
          <div class="mt-12">
            <div class="grid grid-cols-2 border-b">
              <div class="col-span-1 text-lg text-center leading-[3rem] bg-gray-100">{{ t('message.capacity') }}</div>
              <div class="col-span-1 text-lg text-center leading-[3rem] bg-gray-100 border-l border-gray">{{ t('message.maker') }}</div>
              <div class="col-span-1 text-lg text-center leading-[3rem]">{{ info.weight }}</div>
              <div class="col-span-1 text-lg text-center leading-[3rem] border-l border-gray-200">{{ info.storename }}</div>
            </div>
          </div>
          <div class="mt-12 flex space-x-10">
            <button class="bg-primary hover:bg-blue-400 active:bg-primary text-white w-[16.25rem] h-[3.75rem] rounded flex items-center justify-center">
              <p>{{ t('message.faqs') }}</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="bg-primary hover:bg-blue-400 active:bg-primary text-white w-[16.25rem] h-[3.75rem] rounded flex items-center justify-center">
              <p>{{ t('message.shopOnline') }}</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- 製品詳細 -->
    <section class="py-20 w-[1200px] mx-auto">
      <h2 class="text-[2rem] font-bold text-center">{{ t('message.productDtl') }}</h2>
      <div class="text-lg leading-9 mt-16" v-html="info.content"></div>
    </section>
    <!-- その他の類似製品 -->
    <section class="p-[5.63rem] bg-gray-100">
      <h2 class="text-[2rem] font-bold text-center">{{ t('message.otherProducts') }}</h2>
      <div
        v-if="otherList.length > 0"
        class="mt-14 flex justify-center space-x-8"
      >
        <div
          v-for="i in 6"
          :key="i"
          class="w-60 h-72 p-5 bg-white shadow-md rounded-[1.25rem] cursor-pointer hover:opacity-80 hover:shadow-xl"
          @click="changeOther(otherList[i].id)"
        >
          <img :src="otherList[i].thumbnail" width="200" height="200" :alt="otherList[i].title" class="w-[200px] h-[200px] rounded">
          <h3 class="mt-4 text-xl font-bold text-center line-1">{{ otherList[i].title }}</h3>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import { useRoute, useRouter } from 'vue-router'
import emitter from '/src/until/eventbus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
window.scrollTo({ top: 0, behavior: "instant" })
const info = ref({})
const otherList = ref([])
const getData = (id) => {
  api.get('/product/getDetail', { id: id}).then((res) => {
    Object.assign(info.value, res.data.data)
    api.get('/product/getTuiJian', { clazz: res.data.data.clazz }).then((res) => {
      if(res.data.code === 20000) {
        otherList.value = res.data.data
        emitter.emit('changeLoadingState', false)
      } else {
        setTimeout(() => emitter.emit('changeLoadingState', false), 300)
      }
    })
  })
}
getData(route.params.id)
const changeOther = (id) => {
  router.push('/product/detail/' + id)
  getData(id)
  window.scrollTo({ top: 0, behavior: "instant" })
}
</script>