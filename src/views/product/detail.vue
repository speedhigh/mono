<template>
  <main>
    <section class="px-[25.5rem] border-b-[0.5rem] border-b-primary">
      <div class="py-20 flex justify-center space-x-[3.75rem]">
        <img :src="info.thumbnail" :alt="info.title" width="402" height="402" class="flex-shrink-0 rounded w-[402px] h-[402px]">
        <div class="flex-grow">
          <div class="w-[8.75rem] h-10 border border-primary rounded leading-9 text-primary text-center">{{ info.series }}</div>
          <h1 class="mt-7 text-[2rem] font-bold">{{ info.title }}</h1>
          <h3 class="mt-4 text-2xl font-bold">{{ info.clazz }}</h3>
          <div class="mt-12">
            <div class="grid grid-cols-2 border-b">
              <div class="col-span-1 bg-gray-100 text-lg text-center leading-[3rem]">単一製品の容量</div>
              <div class="col-span-1 bg-gray-100 text-lg text-center leading-[3rem] border-l border-gray">メーカー</div>
              <div class="col-span-1 text-lg text-center leading-[3rem]">{{ info.weight }}</div>
              <div class="col-span-1 text-lg text-center leading-[3rem] border-l border-gray-200">{{ info.storename }}</div>
            </div>
          </div>
          <div class="mt-12 flex space-x-10">
            <button class="bg-primary hover:bg-blue-400 active:bg-primary text-white w-[16.25rem] h-[3.75rem] rounded flex items-center justify-center">
              <p>よくある質問</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="bg-primary hover:bg-blue-400 active:bg-primary text-white w-[16.25rem] h-[3.75rem] rounded flex items-center justify-center">
              <p>オンライン買い物</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- 製品詳細 -->
    <section class="px-[22.5rem] py-20">
      <h2 class="text-[2rem] font-bold text-center">製品詳細</h2>
      <div class="text-lg leading-9 mt-16" v-html="info.content"></div>
    </section>
    <!-- その他の類似製品 -->
    <section class="p-[5.63rem] bg-gray-100">
      <h2 class="text-[2rem] font-bold text-center">その他の類似製品</h2>
      <div class="mt-14 flex justify-center space-x-[3.75rem]">
        <div 
          v-for="item in otherList" 
          :key="item.id" 
          class="w-[18.75rem] h-[23.13rem] p-5 bg-white shadow-md rounded-[1.25rem] cursor-pointer"
          @click="changeOther(item.id)"
        >
          <!-- <div class="w-full h-[16.25rem] bg-gray-300 rounded"></div> -->
          <img :src="item.thumbnail" width="260" height="260" :alt="item.title" class="w-[16.25rem] h-[16.25rem] rounded">
          <h3 class="mt-7 text-2xl font-bold text-center">{{ item.title }}</h3>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const info = ref({})
const otherList = ref([])
const getData = (id) => {
  api.get('/product/getDetail', { id: id}).then((res) => {
    Object.assign(info.value, res.data.data)
    api.get('/product/getTuiJian', { clazz: res.data.data.clazz }).then((res) => {
      otherList.value = res.data.data
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