<template>
  <div>
    <!-- 轮播图 -->
    <div class="relative">
      <el-carousel trigger="click" height="540px" indicator-position="none" @change="changeSwiper">
        <el-carousel-item v-for="i in 4" :key="i" class="bg-red-200">
          <h3 class="small justify-center text-3xl text-white" text="2xl">{{ i }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div class="absolute bottom-5 inset-x-0 flex items-center justify-center space-x-6">
        <div
          v-for="i in 4"
          :key="i"
          class="w-12 h-2 rounded-sm"
          :class="active + 1 === i ? 'bg-primary' : 'bg-gray-100 opacity-60'"
        />
      </div>
    </div>
    <!-- 企业新闻 -->
    <div class="px-[22.5rem] py-[7.5rem]">
      <base-news />
    </div>
    <!-- 药品介绍 -->
    <div>
      <div class="w-full h-[50rem] bg-[#F8FBFF] px-[18.13rem] pt-20">
        <p class="text-xl">药品介绍</p>
        <h2 class="mt-4 text-primary text-[2.5rem]">HSD健康製品</h2>
        <div class="mt-10 flex items-center space-x-10">
          <div v-for="i in 3" :key="i" class="w-[21.25rem] h-[12.5rem] rounded bg-gray-500 cursor-pointer"></div>
        </div>
        <el-button type="primary" size="large" class="mt-[1.88rem] w-40 h-11">查看全部</el-button>
      </div>
      <div class="px-[18.13rem] flex flex-row-reverse -mt-[14rem]">
        <div>
          <p class="text-xl">药品介绍</p>
          <h2 class="mt-4 text-primary text-[2.5rem]">第二类药物</h2>
          <div class="mt-10 flex items-center space-x-10">
            <div v-for="i in 3" :key="i" class="w-[21.25rem] h-[12.5rem] rounded bg-gray-500 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业情报 -->
    <div class="py-[7.5rem] text-center">
      <h2 class="text-[2rem]">企業情報</h2>
      <div class="w-72 mx-auto mt-5">
        <el-divider>
          <p class="text-lg text-gray-500">ABOUT US</p>
        </el-divider>
      </div>
      <div class="mt-14 grid grid-cols-3 gap-x-[1.13rem] h-[17.5rem]">
        <div v-for="i in 3" :key="i" class="w-full h-full bg-gray-300 cursor-pointer"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
const changeSwiper = function(index) {
  active.value = index
}
</script>