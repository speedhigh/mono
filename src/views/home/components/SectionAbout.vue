<template>
  <section class="mt-24 text-center">
    <h2 class="text-[2rem]">{{ t('message.aboutus') }}</h2>
    <div class="w-72 mx-auto mt-5">
      <el-divider>
        <p class="text-lg text-gray-500">ABOUT US</p>
      </el-divider>
    </div>
    <div class="mt-14 grid grid-cols-3 gap-x-[1.13rem] h-[17.5rem]">
      <!-- HSD国際株式会社概要 -->
      <div 
        class="w-full h-full cursor-pointer relative hover:opacity-80"
        @click="$router.push('/about/company')"
      >
        <img :src="AboutA" alt="HSD国際株式会社概要" width="623" height="280" class="w-full h-full shadow">
        <div class="absolute bottom-0 inset-x-0 h-[50px] bg-[rgba(255,255,255,0.5)] w-full flex items-center px-3 space-x-2.5">
          <div class="w-5 h-5 bg-primary rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-lg">{{ t('message.aboutusA') }}</p>
        </div>
      </div>
      <!-- 会社の資質 -->
      <div
        class="w-full h-full cursor-pointer relative hover:opacity-80"
        @click="$router.push('/about/aptitude')"
      >
        <img :src="AboutB" alt="会社の資質" width="623" height="280" class="w-full h-full shadow">
        <div class="absolute bottom-0 inset-x-0 h-[50px] bg-[rgba(255,255,255,0.5)] w-full flex items-center px-3 space-x-2.5">
          <div class="w-5 h-5 bg-primary rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-lg">{{ t('message.aboutusB') }}</p>
        </div>
      </div>
      <!-- 経営理念 -->
      <div
        class="w-full h-full cursor-pointer relative hover:opacity-80"
        @click="$router.push('/about/business')"
      >
        <img :src="AboutC" alt="経営理念" width="623" height="280" class="w-full h-full shadow">
        <div class="absolute bottom-0 inset-x-0 h-[50px] bg-[rgba(255,255,255,0.5)] w-full flex items-center px-3 space-x-2.5">
          <div class="w-5 h-5 bg-primary rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-lg">{{ t('message.aboutBusiness') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AboutA from '/src/assets/images/home/about_a.webp'
import AboutB from '/src/assets/images/home/about_b.webp'
import AboutC from '/src/assets/images/home/about_c.webp'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>