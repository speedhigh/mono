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
        <img :src="aboutA" :alt="t('message.aboutCompany')" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.aboutCompany') }}</p>
        </div>
      </div>
      <!-- 经营理念 -->
      <div
        class="w-full h-[13.75rem] rounded-lg cursor-pointer hover:opacity-80 relative border"
        @click="$router.push('/about/business')"
      >
        <img :src="aboutB" :alt="t('message.aboutBusiness')" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.aboutBusiness') }}</p>
        </div>
      </div>
      <!-- 药剂师简介 -->
      <div
        class="w-full h-[13.75rem] rounded-lg cursor-pointer hover:opacity-80 relative"
        @click="$router.push('/about/pharmacist')"
      >
        <img :src="aboutC" :alt="t('message.aboutPharmacist')" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.aboutPharmacist') }}</p>
        </div>
      </div>
      <!-- 公司资质 -->
      <div
        class="w-full h-[13.75rem] rounded-lg cursor-pointer hover:opacity-80 relative"
        @click="$router.push('/about/aptitude')"
      >
        <img :src="aboutD" :alt="t('message.aboutusB')" width="372" height="220" class="w-full h-full rounded-lg object-cover">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.aboutusB') }}</p>
        </div>
      </div>
      <!-- 联系我们 -->
      <div
        class="w-full h-[13.75rem] rounded-lg cursor-pointer hover:opacity-80 relative"
        @click="$router.push('/about/contact')"
      >
        <img :src="aboutE" :alt="t('message.contactUs')" width="372" height="220" class="w-full h-full rounded-lg object-cover">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">{{ t('message.contactUs') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import banner from '/src/assets/images/about/banner.webp'
import aboutA from '/src/assets/images/about/about_a.webp'
import aboutB from '/src/assets/images/about/about_b.webp'
import aboutC from '/src/assets/images/about/about_c.webp'
import aboutD from '/src/assets/images/about/about_d.webp'
import aboutE from '/src/assets/images/about/about_e.webp'
import emitter from '/src/until/eventbus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
setTimeout(() => emitter.emit('changeLoadingState', false), 150)
</script>