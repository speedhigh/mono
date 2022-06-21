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
      @click="$router.push('/')"
    >
    <!-- menu -->
    <div class="ml-auto flex items-center space-x-3">
      <!-- 首页 -->
      <div 
        class="menu-item"
        :class="{ 'menu-item-active': $route.meta.name === 'Home' }"
        @click="$router.push('/')"
      >
        HOME
      </div>
      <!-- 产品信息 -->
      <div>
        <div
          class="menu-item flex items-center space-x-0.5"
          :class="{'text-blue-400' : isActive.product, 'menu-item-active': $route.meta.name === 'Product'}"
          @mouseenter="isActive.product = true; keyword = ''"
          @click="toProduct"
        >
          <p>{{ t('message.product') }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="{'transition duration-200 rotate-180' : isActive.product && $route.path !== '/product/list' }" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <div
          v-if="isActive.product && $route.path !== '/product/list'"
          class="absolute top-[100px] bg-[rgba(255,255,255,0.9)] backdrop-blur-md shadow rounded-b-md inset-x-0 py-10 leading-none flex justify-center space-x-24"
          @mouseenter="isActive.product = true; keyword = ''"
        >
        <!-- v-if="isActive.product" -->
          <!-- 精确搜索 -->
          <div class="pl-56 pr-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
            <h3 class="mt-2.5 font-bold">{{ t('message.searchTypeA') }}</h3>
            <div class="w-72">
              <el-input
                v-model="keyword"
                :placeholder="t('message.searchPlaceholder')"
                class="mt-5 h-9"
                @keyup.enter.native="toSearch(keyword)"
              >
                <template #suffix>
                  <el-icon
                    class="el-input__icon cursor-pointer rounded-xl"
                    :color="isActive.search ? '#1f2937' : '#9ca3af'"
                    @mouseenter="isActive.search = true"
                    @mouseleave="isActive.search = false"
                    @click="toSearch(keyword)"
                  >
                    <search />
                  </el-icon>
                </template>
              </el-input>
            </div>
          </div>
          <!-- 按类别搜索 -->
          <div class="w-1/5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
            <h3 class="mt-2.5 font-bold">{{ t('message.searchTypeB') }}</h3>
            <div class="mt-5 flex items-end space-x-8 border-b">
              <div v-for="(item, index) in clazzNames" :key="index" class="cursor-pointer">
                <p
                  :class="clazzActive === index ? 'text-2xl font-bold border-b-4 border-primary leading-10 pb-1' : 'text-lg leading-10 pb-1'"
                  @click="clazzActive = index"
                >
                  {{ item }}
                </p>
              </div>
            </div>
            <div  class="mt-2 flex flex-col flex-wrap h-60 flex-shrink-0 py-2 rounded-lg">
              <div 
                v-for="(series, i) in clazzList[clazzActive].seriesnames"
                :key="i"
                class="leading-7 cursor-pointer hover:text-white hover:bg-primary active:bg-blue-400 rounded px-2 mb-2 mr-4"
                :class="$route.query.clazzname === clazzList[clazzActive].clazzname && $route.query.seriesname === series ? 'text-white bg-primary' : 'text-gray-600'"
                @click="selOption(clazzList[clazzActive].clazzname, series)"
              >
               {{ series }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 企业新闻 -->
      <div 
        class="menu-item hover:bg-blue-100"
        :class="{ 'menu-item-active' : $route.meta.name === 'News' }"
        @click="$router.push('/news')"
      >
        <p>{{ t('message.news') }}</p>
      </div>
      <!-- 关于我们 -->
      <div 
        class="menu-item hover:bg-blue-100"
        :class="{ 'menu-item-active' : $route.meta.name === 'About' }"
        @click="$router.push('/about')"
      >
        <p>{{ t('message.about') }}</p>
      </div>
      <!-- 语言 -->
      <div
        v-if="false"
        class="relative" 
        @mouseleave="isActive.language = false"
      >
        <div 
          class="menu-item flex items-center space-x-0.5"
          :class="{'text-blue-400' : isActive.language}"
          @mouseenter="isActive.language = true"
          @click="isActive.language = !isActive.language"
        >
          <p>{{ t('message.language') }}</p>
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
      <p>{{ t('message.ask') }}</p>
    </div>
  </header>
</template>


<script setup>
import { ref, reactive, watch, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import api from '/src/api/index.js'
import logoImg from '/src/assets/images/logo.png'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
const route = useRoute()

// 管理导航栏中有子列表选项的状态
const isActive = reactive({
  product: false,
  language: false,
  search: false
})

// 产品信息
const keyword = ref('')
const clazzActive = ref(sessionStorage.getItem("clazzActive") ? +sessionStorage.getItem("clazzActive") : 0)
const clazzNames = ref([])
const clazzList = ref([])
const getClazz = function() {
  api.get('/product/getClazz').then((res) => {
    if(res.data.code === 20000) {
      clazzNames.value = res.data.data.map(item => item.clazzname)
      clazzList.value = res.data.data
      sessionStorage.setItem("clazzList", JSON.stringify(res.data.data))
      sessionStorage.setItem("clazzNames", JSON.stringify(clazzNames.value))
    }
  })
}
if(sessionStorage.getItem("clazzList") && sessionStorage.getItem("clazzNames")) {
  clazzNames.value = JSON.parse(sessionStorage.getItem("clazzNames"))
  clazzList.value = JSON.parse(sessionStorage.getItem("clazzList"))
} else {
  getClazz()
}
watch(() => clazzActive.value, value => {
  sessionStorage.setItem('clazzActive', value)
})
const toProduct = function() {
  sessionStorage.removeItem("keyword")
  sessionStorage.removeItem("seriesname")
  sessionStorage.setItem('clazzname', clazzNames.value[0])
  router.push('/product/list')
}
const toSearch = function(keyword) {
  sessionStorage.removeItem("clazzname")
  sessionStorage.removeItem("seriesname")
  sessionStorage.setItem('keyword', keyword)
  router.push('/product/list')
}
const selOption = function(clazzname, seriesname) {
  sessionStorage.removeItem("keyword")
  sessionStorage.setItem('clazzname', clazzname)
  sessionStorage.setItem('seriesname', seriesname)
  router.push('/product/list')
}


// 设置多语言
const { proxy } = getCurrentInstance()
const languageDef = ref(localStorage.getItem('language') ? localStorage.getItem('language') : 'ja')
const language = ref([
  { title: '日本語', abbr: 'ja' },
  { title: '简体中文', abbr: 'zh' }
])
const changeLanguage = (language) => {
  languageDef.value = language
  if(localStorage.getItem('language') !== language) {
    localStorage.setItem('language',language)
    proxy.$i18n.locale = language
    sessionStorage.removeItem("clazzNames")
    sessionStorage.removeItem("clazzList")
    sessionStorage.removeItem("keyword")
    sessionStorage.removeItem("clazzname")
    sessionStorage.removeItem("seriesname")
    getClazz()
    if(route.path === '/product/list') alert(t('message.languageText'))
    router.go(0)
  }
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