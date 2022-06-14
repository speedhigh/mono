<template>
  <div class="space-y-[4.38rem] pb-20">
    <!-- banner -->
    <div class="w-full h-[18.75rem] relative flex items-center">
      <img :src="banner" alt="about" width="1920" height="300" class="absolute inset-0 w-full h-full object-cover object-left">
      <div class="w-[1200px] mx-auto relative">
        <h1 class="text-4xl text-white">会社情報</h1>
      </div>
    </div>
    <!-- profile -->
    <div class="w-[1200px] mx-auto text-lg leading-8">
      日本HSD国際株式会社は2019年4月に設立されました。本社は福岡にあります。主に医薬品、健康食品、医療機器を取り扱う会社です。安全で信頼できる日本の医薬品や医療機器をパートナーに提供するために、いくつかの外国企業と戦略的パートナーシップを結び、エンドユーザーはアジアのいくつかの国にいます。
    </div>
    <!-- menu -->
    <div class="w-[1200px] mx-auto grid grid-cols-3 gap-x-[2.63rem] gap-y-[2.13rem]">
      <!-- 公司简介 -->
      <div class="w-full h-[13.75rem] rounded-lg cursor-pointer relative" @click="$router.push('/about/company')">
        <img :src="aboutA" alt="公司简介" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">会社概要</p>
        </div>
      </div>
      <!-- 经营理念 -->
      <div class="w-full h-[13.75rem] rounded-lg cursor-pointer relative border" @click="$router.push('/about/business')">
        <img :src="aboutB" alt="管理理念" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">経営理念</p>
        </div>
      </div>
      <!-- 药剂师简介 -->
      <div class="w-full h-[13.75rem] rounded-lg cursor-pointer relative" @click="$router.push('/about/pharmacist')">
        <img :src="aboutC" alt="药剂师概述" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">薬剤師の概要</p>
        </div>
      </div>
      <!-- 沿革历史 -->
      <div class="w-full h-[13.75rem] rounded-lg cursor-pointer relative" @click="$router.push('/about/history')">
        <img :src="aboutD" alt="会社概要" width="372" height="220" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">沿革・歴史</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import banner from '/src/assets/images/about/banner.jpg'
import aboutA from '/src/assets/images/about/about_a.png'
import aboutB from '/src/assets/images/about/about_b.png'
import aboutC from '/src/assets/images/about/about_c.png'
import aboutD from '/src/assets/images/about/about_d.png'
import emitter from '/src/until/eventbus'
emitter.emit('changeLoadingState', true)
setTimeout(() => emitter.emit('changeLoadingState', false), 300)
</script>