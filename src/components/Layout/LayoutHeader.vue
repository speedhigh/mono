<template>
  <header 
    class="fixed top-0 inset-x-0 h-[6.25rem] flex items-center bg-white pl-10 z-[10000] border-b" 
    @mouseleave="isActive.product = false"
  >
    <!-- left-logo -->
    <img 
      :src="logoImg" 
      width="266" 
      height="60"
      alt="HSD国际株式会社" 
      class="hover:cursor-pointer" 
      @click="jumpTo('/')"
    >
    <!-- menu -->
    <div class="ml-auto flex items-center space-x-3">
      <!-- 首页 -->
      <div 
        class="menu-item"
        :class="{ 'menu-item-active': $route.meta.name === 'Home' }"
        @click="jumpTo('/')"
      >
        首页
      </div>
      <!-- 产品信息 -->
      <div>
        <div
          class="menu-item flex items-center space-x-0.5"
          :class="{'text-blue-400' : isActive.product, 'menu-item-active': $route.meta.name === 'Product'}"
          @mouseenter="isActive.product = true"
          @click="$router.push('/product/list'); isActive.product = !isActive.product"
        >
          <p>产品信息</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="{'transition duration-200 rotate-180' : isActive.product}" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <div
          v-if="isActive.product"
          class="absolute top-[100px] bg-[rgba(255,255,255,0.6)] backdrop-blur-md shadow rounded-b-md inset-x-0 py-10 leading-none flex justify-center space-x-32"
          @mouseenter="isActive.product = true"
        >
          <!-- 精确搜索 -->
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
            <h3 class="mt-2.5 font-bold">精确搜索</h3>
            <el-input
              v-model="searchValue"
              placeholder="输入产品名称或关键字"
              class="mt-5 w-[16.25rem] h-9"
              @keyup.enter.native="jumpTo('/product/list?keyword=' + searchValue)"
            >
              <template #suffix>
                <el-icon
                  class="el-input__icon cursor-pointer rounded-xl"
                  :color="isActive.search ? '#1f2937' : '#9ca3af'"
                  @mouseenter="isActive.search = true"
                  @mouseleave="isActive.search = false"
                  @click="jumpTo('/product/list?keyword=' + searchValue)"
                >
                  <search />
                </el-icon>
              </template>
            </el-input>
          </div>
          <!-- 按类别搜索 -->
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
            <h3 class="ml-2 mt-2.5 font-bold">按类别搜索</h3>
            <div class="mt-4 flex items-start space-x-14">
              <div 
                v-for="(item, index) in seriesList" 
                :key="index" 
                class="flex flex-col flex-wrap h-60 flex-shrink-0"
              >
                <div
                  v-for="(tag, i) in item.seriesnames"
                  :key="i"
                  class="leading-7 cursor-pointer hover:text-white hover:bg-primary active:bg-blue-400 rounded px-2 mb-2 flex-shrink-0 mr-2 text-center"
                  :class="$route.query.clazzname === item.clazzname && $route.query.seriesname === tag ? 'text-white bg-primary' : 'text-gray-600'"
                  @click="$router.push('/product/list?clazzname=' + item.clazzname + '&seriesname=' + tag); isActive.product = false"
                >
                  {{ tag }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 企业新闻 -->
      <div 
        class="menu-item hover:bg-blue-100"
        :class="{ 'menu-item-active' : $route.meta.name === 'News' }"
        @click="jumpTo('/news')"
      >
        企业新闻
      </div>
      <!-- 关于我们 -->
      <div 
        class="menu-item hover:bg-blue-100"
        :class="{ 'menu-item-active' : $route.meta.name === 'About' }"
        @click="jumpTo('/about')"
      >
        关于我们
      </div>
      <!-- 语言 -->
      <div 
        class="relative" 
        @mouseleave="isActive.language = false"
      >
        <div 
          class="menu-item flex items-center space-x-0.5"
          :class="{'text-blue-400' : isActive.language}"
          @mouseenter="isActive.language = true"
          @click="isActive.language = !isActive.language"
        >
          <p>语言</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="{'transition duration-200 rotate-180' : isActive.language}" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <div
          v-show="isActive.language"
          class="absolute w-36 bg-gray-50 shadow rounded-md right-0 py-3 px-2 space-y-1.5"
        >
          <p
            v-for="item in language"
            :key="item.abbr"
            class="leading-10 px-3.5 rounded cursor-pointer"
            :class="languageDef === item.abbr ? 'bg-primary text-white' : 'hover:bg-gray-200'"
            @click="changeLanguage(item.abbr)"
          >
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
    <!-- 咨询 -->
    <div class="ml-12 w-[7.5rem] h-[6.25rem] bg-primary hover:bg-blue-400 active:bg-primary text-white flex flex-col items-center justify-center space-y-3.5 cursor-pointer">
      <svg class="w-6 h-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"></path></svg>
      <p>咨询</p>
    </div>
  </header>
</template>


<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import api from '/src/api/index.js'
import logoImg from '/src/assets/images/logo.png'

const router = useRouter()
// 点击导航栏跳转
const jumpTo = (url) => {
  isActive.product = false
  router.push(url)
}
// 管理导航栏中有子列表选项的状态
const isActive = reactive({
  product: false,
  language: false,
  search: false
})
// 产品信息
const searchValue = ref('')
const seriesList = ref([])
api.get('/product/getClazz').then((res) => {
  seriesList.value = res.data.data
})
// 设置多语言
const languageDef = ref('zh')
const language = ref([
  { title: '简体中文', abbr: 'zh' },
  { title: 'EngLish', abbr: 'en' },
  { title: '日本語', abbr: 'ja' },
])
const changeLanguage = (language) => {
  languageDef.value = language
}
</script>

<style scoped>
  .menu-item {
    @apply px-6 py-4 cursor-pointer hover:text-primary hover:bg-blue-50
  }
  .menu-item-active {
    @apply text-primary border-b-2 border-primary
  }
</style>