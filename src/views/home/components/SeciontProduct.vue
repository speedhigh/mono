<template>
  <section class="mt-[4.38rem] w-full h-[53rem] bg-[#F8FBFF] pt-[4.75rem] pb-24 relative">
    <div class="relative w-[1200px] mx-auto">
      <p class="text-lg">{{ t('message.productTitleA') }} \</p>
      <h2 class="mt-4 text-[2.13rem] text-primary">{{ t('message.productTitleB') }}</h2>
      <div class="mt-14 grid grid-cols-3 gap-x-[2.63rem] gap-y-10">
        <div 
          v-for="item in productList"
          :key="item.id" 
          class="h-[12.5rem] rounded-lg relative cursor-pointer hover:shadow-lg hover:shadow-primary/50 hover:opacity-80"
          @click="$router.push('/product/detail/' + item.id)"
        >
          <img :src="item.thumbnail" :alt="item.title" width="100%" height="200" class="w-full h-full rounded-lg object-contain bg-white shadow">
          <div class="absolute bottom-0 inset-x-0 h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)] w-full flex items-center px-3 space-x-2.5">
            <div class="w-5 h-5 bg-primary rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <p class="text-lg text-white line-1">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <!-- btn -->
      <div class="text-center">
        <el-button type="primary" class="mt-14 min-w-[10rem] h-11" size="large" @click="$router.push('/product/list')">{{ t('message.seeAll') }}</el-button>
      </div>
    </div>
    <!-- star1 -->
    <div
      class="absolute left-10 bottom-[4.75rem] w-[16.76rem] h-[18.5rem] bg-primary opacity-10 p-4"
      style="clip-path: polygon(100% 0%, 90% 100%, 0% 40%)"
    >
      <div
        class="w-full h-full bg-[#F8FBFF]"
        style="clip-path: polygon(100% 2%, 90% 96%, 5% 40%)"
      />
    </div>
    <!-- star2 -->
    <div
      class="absolute top-6 left-64 w-[5.5rem] h-[5.5rem] bg-primary opacity-10 p-3.5"
      style="clip-path: polygon(0% 0%, 100% 30%, 20% 100%)"
    >
      <div
        class="w-full h-full bg-[#F8FBFF]"
        style="clip-path: polygon(0% 0%, 92% 28%,18% 92%)"
      />
    </div>
    <!-- star3 -->
    <div
      class="absolute top-24 left-[74.5rem] w-[5.5rem] h-[5.5rem] bg-primary opacity-10 p-3.5"
      style="clip-path: polygon(70% 0%, 100% 100%, 0% 80%)"
    >
      <div
        class="w-full h-full bg-[#F8FBFF]"
        style="clip-path: polygon(74% 8%, 100% 100%, 8% 84%)"
      />
    </div>
    <!-- star4 -->
    <div
      class="absolute right-60 bottom-[19rem] w-20 h-20 bg-primary opacity-10 p-3"
      style="clip-path: polygon(0% 0%, 100% 5%, 40% 100%)"
    >
      <div
        class="w-full h-full bg-[#F8FBFF]"
        style="clip-path: polygon(8% 0%, 90% 2%, 40% 78%)" 
      />
    </div>
    <!-- star5 -->
    <div
      class="absolute right-[4.63rem] bottom-4 w-56 h-56 bg-primary opacity-10 p-3"
      style="clip-path: polygon(100% 0%, 90% 100%, 0% 40%)"
    >
      <div
        class="w-full h-full bg-[#F8FBFF]" 
        style="clip-path: polygon(100% 2%, 90% 96%, 4% 40%)" 
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// 首页展示的药品
const productList = ref([])
api.get('/index/getProduct').then((res) => {
  productList.value = res.data.data
})
</script>