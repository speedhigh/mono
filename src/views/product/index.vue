<template>
  <main>
    <!-- 检索分类 -->
    <section class="pt-10 pb-5 w-[1200px] mx-auto">
      <div class="flex items-start space-x-12">
        <p class="flex-shrink-0 text-[1.38rem] font-bold">{{ t('message.searchTypeB') }}</p>
        <div class="-mt-3 w-full">
          <div class="flex items-end space-x-10 border-b w-full">
            <div v-for="(item, index) in clazzNames" :key="index" class="cursor-pointer">
              <p
                :class="params.clazzname === item ? 'text-2xl font-bold border-b-4 border-primary leading-10 pb-1' : 'text-lg leading-10 pb-1'"
                @click="changeClazzTab(item, index)"
              >
                {{ item }}
              </p>
            </div>
          </div>
          <div class="mt-6 w-full flex items-center flex-wrap">
            <button
              v-for="(series, i) in clazzList[clazzActive].seriesnames"
              :key="i"
              class="mr-[1.88rem] mb-5 px-5 py-2 rounded-3xl border hover:border-primary"
              :class="params.seriesname === series ? 'text-white bg-primary border-primary' : 'text-gray-600 hover:text-primary border-gray-400'"
              @click="selOption(clazzList[clazzActive].clazzname, series)"
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
        <h2 class="text-[1.38rem] font-bold">{{ t('message.searchTypeC') }}</h2>
        <div class="w-[37.5rem] h-12 border border-gray-400 bg-white rounded-3xl flex items-center px-2">
          <input 
            v-model="keyword"
            type="text" 
            placeholder="製品名とキーワードを入力してください" 
            class="px-4 bg-white w-full h-full rounded-3xl"
            @keyup.enter.native="search(keyword)"
          >
          <div 
            class="w-8 h-8 bg-primary hover:bg-blue-400 rounded-full flex items-center justify-center cursor-pointer"
            @click="search(keyword)"  
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
        :size="8"
        url="/product/getPage"
        :params="params"
      >
        <template #default="slotProps">
          <div class="grid grid-cols-4 gap-x-8 gap-y-[1.87rem]">
            <div v-for="item in slotProps.list" :key="item.id">
              <div class="rounded-xl border border-gray-50 w-full h-96 pt-6 pb-5 px-10 shadow-md">
                <img
                  :src="item.thumbnail" 
                  :alt="item.title"
                  width="180"
                  height="180"
                  class="rounded-full h-[11.25rem] w-[11.25rem] shadow-lg border border-gray-50 mx-auto"
                >
                <h3 class="mt-12 text-xl font-bold line-1">{{ item.title }}</h3>
                <button
                  class="mt-6 w-[8.75rem] h-11 bg-primary text-white text-sm rounded hover:border-2 hover:border-primary hover:bg-white hover:text-primary active:border-blue-200 active:text-blue-300"
                  @click="$router.push('/product/detail/' + item.id)"
                >
                  {{ t('message.seeDtl') }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="-mt-0.5 h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
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
      <base-news :showBtn="true" />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// import api from '/src/api/index.js'
// import { useRoute, useRouter } from 'vue-router'
import emitter from '/src/until/eventbus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
// const route = useRoute()
// const router = useRouter()

emitter.emit('changeLoadingState', false)

const keyword = ref(sessionStorage.getItem('keyword') ? sessionStorage.getItem('keyword') : '')
// 获取类别
const clazzActive = ref(sessionStorage.getItem("clazzActive") ? +sessionStorage.getItem("clazzActive") : 0)
const clazzNames = ref(JSON.parse(sessionStorage.getItem("clazzNames")) ? JSON.parse(sessionStorage.getItem("clazzNames")) : [])
const clazzList = ref(JSON.parse(sessionStorage.getItem("clazzList")) ? JSON.parse(sessionStorage.getItem("clazzList")) : [])
const params = ref({
  keyword: sessionStorage.getItem('keyword') ? sessionStorage.getItem('keyword') : '',
  clazzname: sessionStorage.getItem('clazzname') ? sessionStorage.getItem('clazzname') : '',
  seriesname: sessionStorage.getItem('seriesname') ? sessionStorage.getItem('seriesname') : ''
})

// 搜索
const search = function(keyword) {
  params.value.clazzname = params.value.seriesname = ''
  params.value.keyword = keyword
  sessionStorage.removeItem("clazzname")
  sessionStorage.removeItem("seriesname")
  sessionStorage.setItem('keyword', keyword)
}

// 切换类别
const changeClazzTab = function(item, index) {
  clazzActive.value = index
  params.value.clazzname = item
  params.value.keyword = params.value.seriesname = keyword.value = ''
  sessionStorage.setItem('clazzname', item)
  sessionStorage.setItem('clazzActive', index)
  sessionStorage.removeItem("seriesname")
  sessionStorage.removeItem("keyword")
}

// 选择标签
const selOption = function(clazzname, series) {
  if(params.value.seriesname === series) {
    params.value.keyword = params.value.seriesname = keyword.value = ''
    sessionStorage.removeItem("seriesname")
    sessionStorage.removeItem("keyword")
  } else {
    params.value.keyword = keyword.value = ''
    params.value.clazzname = clazzname
    params.value.seriesname = series
    sessionStorage.setItem('clazzname', clazzname)
    sessionStorage.setItem('seriesname', series)
    sessionStorage.removeItem("keyword")
  }
}
</script>