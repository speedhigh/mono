<template>
  <div class="space-y-[4.38rem] pb-20">
    <!-- banner -->
    <div class="w-full h-[18.75rem] relative flex items-center">
      <img :src="banner" alt="about" width="1920" height="300" class="absolute inset-0 w-full h-full object-cover object-left">
      <div class="w-[1200px] mx-auto relative">
        <h1 class="text-4xl text-white">{{ t('message.about') }}</h1>
      </div>
    </div>
    <!-- profile -->
    <div class="w-[1200px] mx-auto text-lg leading-8">{{ t('message.aboutText') }}</div>
    <!-- menu -->
    <div class="w-[1200px] mx-auto grid grid-cols-3 gap-x-[2.63rem] gap-y-[2.13rem]">
      <!-- 公司简介 -->
      <div
        class="w-full h-[13.75rem] rounded-lg cursor-pointer hover:opacity-80 relative"
        @click="$router.push('/about/company')"
      >
        <img :src="aboutA" alt="公司简介" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.aboutCompany') }}</p>
        </div>
      </div>
      <!-- 经营理念 -->
      <div
        class="w-full h-[13.75rem] rounded-lg cursor-pointer hover:opacity-80 relative border" 
        @click="$router.push('/about/business')"
      >
        <img :src="aboutB" alt="管理理念" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.aboutBusiness') }}</p>
        </div>
      </div>
      <!-- 药剂师简介 -->
      <div
        class="w-full h-[13.75rem] rounded-lg cursor-pointer hover:opacity-80 relative" 
        @click="$router.push('/about/pharmacist')"
      >
        <img :src="aboutC" alt="药剂师概述" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.aboutPharmacist') }}</p>
        </div>
      </div>
      <!-- 沿革历史
      <div
        class="w-full h-[13.75rem] rounded-lg cursor-pointer hover:opacity-80 relative" 
        @click="$router.push('/about/history')"
      >
        <img :src="aboutD" alt="沿革历史" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.aboutHistory') }}</p>
        </div>
      </div>
      -->
      <!-- 公司资质 -->
      <div
        class="w-full h-[13.75rem] rounded-lg cursor-pointer hover:opacity-80 relative" 
        @click="$router.push('/about/aptitude')"
      >
        <img :src="aboutE" alt="公司资质" width="372" height="220" class="w-full h-full rounded-lg object-cover">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.aboutusB') }}</p>
        </div>
      </div>
      <!-- 招聘信息
      <div
        class="w-full h-[13.75rem] rounded-lg cursor-pointer hover:opacity-80 relative" 
        @click="$router.push('/about/recruit')"
      >
        <img :src="aboutF" alt="招聘信息" width="372" height="220" class="w-full h-full rounded-lg object-cover">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.aboutusC') }}</p>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<script setup>
import banner from '/src/assets/images/about/banner.webp'
import aboutA from '/src/assets/images/about/about_a.webp'
import aboutB from '/src/assets/images/about/about_b.webp'
import aboutC from '/src/assets/images/about/about_c.webp'
// import aboutD from '/src/assets/images/about/about_d.webp'
import aboutE from '/src/assets/images/home/about_b.webp'
// import aboutF from '/src/assets/images/home/about_c.webp'
import emitter from '/src/until/eventbus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
setTimeout(() => emitter.emit('changeLoadingState', false), 150)
</script>