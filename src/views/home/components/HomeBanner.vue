<template>
  <div class="relative h-[540px]">
    <el-carousel
      v-if="swiperList.length > 0"
      ref="swiperRef"
      trigger="click"
      height="540px"
      :autoplay="false"
      indicator-position="none"
      :arrow="swiperList.length > 1 ? 'hover' : 'never'"
      @change="changeSwiper"
    >
      <el-carousel-item 
        v-for="item in swiperList"
        :key="item.id"
      >
        <div 
          v-if="item.keyword === '视频'"
          class="relative w-full h-full flex justify-center items-center"
        >
          <vue3VideoPlay v-bind="options" />
        </div>
        <img
          v-else
          :src="item.thumbnail"
          :alt="item.title"
          width="100%"
          height="540"
          class="w-full h-full cursor-pointer"
          @click="jumpTo(item.href, item.keyword)"
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
        :class="active + 1 === i ? 'bg-primary' : 'bg-gray-300 opacity-40'"
        @click="setActive(i)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
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

const options = reactive({
  autoPlay: true,
  width: '100%', //播放器高度
  height: '700px', //播放器高度
  color: "#4799FF", //主题色
  control: true, //是否显示控制器
  title: '', //视频名称
  src: "", //视频源
  controlBtns: ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'fullScreen']
})

const swiperList = ref([])
if(!sessionStorage.getItem("swiperList")) {
  api.get('/index/getLunBo').then((res) => {
    if(res.data.code === 20000) {
      swiperList.value = res.data.data
      options.src = res.data.data[0].href
      options.title = res.data.data[0].title
      sessionStorage.setItem("swiperList", JSON.stringify(res.data.data))
    }
  })
} else {
  swiperList.value = JSON.parse(sessionStorage.getItem("swiperList"))
  options.src = swiperList.value[0].href
  options.title = swiperList.value[0].title
}

const clazzNames = ref(JSON.parse(sessionStorage.getItem("clazzNames")))

const jumpTo = function(url, active) {
  if(url === '/product/list') {
    sessionStorage.removeItem("seriesname")
    sessionStorage.setItem('clazzActive', active)
    sessionStorage.setItem('clazzname', clazzNames.value[active])
  }
  router.push(url)
}
</script>