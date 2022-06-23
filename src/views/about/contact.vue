<template>
  <AboutContent text="message.contactUs" />
  <img :src="mapImg" alt="地图" width="893" height="362" class="mt-6 cursor-pointer" @click="seeDtl">
</template>


<script setup>
import AboutContent from './components/AboutContent.vue'
import mapImg from '/src/assets/images/about/map.webp'

const seeDtl = function() {
  window.open('https://www.google.com/maps/place/%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9%E3%83%91%E3%83%AC%E3%82%A2%E7%AD%91%E7%B4%AB%E9%87%8E/@33.4996043,130.5077384,17z/data=!3m1!4b1!4m5!3m4!1s0x35419b0b0567dfaf:0x85994a044eff0726!8m2!3d33.4996137!4d130.5077384?hl=zh-CN','_blank')
}
</script>