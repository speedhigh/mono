<template>
  <main>
    <!-- 检索分类 -->
    <section class="pt-10 pb-5 space-y-2.5 w-[1200px] mx-auto">
      <div v-for="(item, index) in menuList" :key="index">
        <div class="flex items-start space-x-8">
          <div class="flex-shrink-0 mb-5">
            <p class="text-[1.38rem] font-bold">分類による検索</p>
            <p class="mt-2 text-center">({{ item.clazzname }})</p>
          </div>
          <div class="flex-grow w-full flex items-center flex-wrap">
            <button
              v-for="(series, i) in item.seriesnames"
              :key="i"
              class="ml-[1.88rem] mb-5 px-5 py-2 rounded-3xl border hover:border-primary"
              :class="$route.query.clazzname === item.clazzname && $route.query.seriesname === series ? 'text-white bg-primary border-primary' : 'text-gray-600 hover:text-primary border-gray-400'"
              @click="$router.push('/product/list?clazzname=' + item.clazzname + '&seriesname=' + series)"
            >
              {{ series }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- 搜索 -->
    <section class="h-[7.5rem] bg-gray-100">
      <div class="w-[1200px] h-full mx-auto flex items-center space-x-10">
        <h2 class="text-[1.38rem] font-bold">キーワードで探す</h2>
        <div class="w-[37.5rem] h-12 border border-gray-400 bg-white rounded-3xl flex items-center px-2">
          <input 
            v-model="keyword"
            type="text" 
            placeholder="製品名とキーワードを入力してください" 
            class="px-4 bg-white w-full h-full rounded-3xl"
            @keyup.enter.native="$router.push('/product/list?keyword=' + keyword)"
          >
          <div 
            class="w-8 h-8 bg-primary hover:bg-blue-400 rounded-full flex items-center justify-center cursor-pointer"
            @click="$router.push('/product/list?keyword=' + keyword)"  
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
    <!-- 商品列表 -->
    <section class="pt-20 w-[1200px] mx-auto">
      <base-pagination
        :size="6"
        url="/product/getPage"
        :params="params"
      >
        <template #default="slotProps">
          <div class="grid grid-cols-3 gap-[3.75rem]">
            <div v-for="item in slotProps.list" :key="item.id">
              <div class="rounded-2xl shadow-lg border w-full h-[28.75rem] pt-12 pb-10 px-20">
                <img :src="item.thumbnail" :alt="item.title" width="180" height="180" class="rounded-full h-[11.25rem] w-[11.25rem] mx-auto">
                <h3 class="mt-[4.38rem] text-2xl font-bold">{{ item.title }}</h3>
                <button 
                  class="mt-10 w-full h-[3.38rem] bg-primary text-white rounded hover:border-2 hover:border-primary hover:bg-white hover:text-primary active:border-blue-200 active:text-blue-300"
                  @click="$router.push('/product/detail/' + item.id)"
                >
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </template>
      </base-pagination>
    </section>
    <!-- 新闻 -->
    <section class="py-20 w-[1200px] mx-auto">
      <base-news />
    </section>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'
import api from '/src/api/index.js'
import { useRoute } from 'vue-router'
const route = useRoute()
// 获取类别
const menuList = ref()
api.get('/product/getClazz').then((res) => {
  menuList.value = res.data.data
})
const keyword = ref('')
const params = ref({
  keyword: route.query.keyword,
  clazzname: route.query.clazzname,
  seriesname: route.query.seriesname
})

watch(() => route.query, value => {
  console.log('aaa')
  params.value.keyword = value.keyword ? value.keyword : ''
  params.value.clazzname = value.clazzname ? value.clazzname : null
  params.value.seriesname = value.seriesname ? value.seriesname : null
})
</script>