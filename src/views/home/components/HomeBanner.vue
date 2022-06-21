<template>
  <div class="relative">
    <el-carousel
      v-if="swiperList[0]"
      ref="swiperRef" 
      trigger="click" 
      height="540px"
      indicator-position="none"
      :arrow="swiperList.length > 1 ? 'hover' : 'never'"
      @change="changeSwiper"
    >
      <el-carousel-item v-for="item in swiperList" :key="item.id">
        <img 
          :src="item.thumbnail" 
          :alt="item.keyword" 
          width="100%" 
          height="540" 
          class="w-full h-full cursor-pointer"
          @click="jumpTo(item.href, index)"
        >
      </el-carousel-item>
    </el-carousel>
    <div
      v-if="swiperList.length > 1"
      class="absolute bottom-5 inset-x-0 flex items-center justify-center space-x-6"
    >
      <div
        v-for="i in swiperList.length"
        :key="i"
        class="w-12 h-2 rounded-sm cursor-pointer"
        :class="active + 1 === i ? 'bg-primary' : 'bg-gray-100 opacity-60'"
        @click="setActive(i)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import { useRouter } from 'vue-router'
const router = useRouter()

// 轮播图相关
const active = ref(0)
const changeSwiper = function(index) {
  active.value = index
}
const swiperRef = ref()
const setActive = function(index) {
  swiperRef.value.setActiveItem(index-1)
}
const swiperList = ref([])
api.get('/index/getLunBo').then((res) => {
  swiperList.value = res.data.data
})

const jumpTo = function(url, index) {
  router.push(url)
}
</script>