<template>
  <div class="space-y-[4.38rem] pb-20">
    <!-- banner -->
    <div class="h-[18.75rem] bg-primary"></div>
    <!-- profile -->
    <div class="px-[22.5rem] text-lg leading-8">
      日本HSD国際株式会社は2019年4月に設立されました。本社は福岡にあります。主に医薬品、健康食品、医療機器を取り扱う会社です。安全で信頼できる日本の医薬品や医療機器をパートナーに提供するために、いくつかの外国企業と戦略的パートナーシップを結び、エンドユーザーはアジアのいくつかの国にいます。
    </div>
    <!-- menu -->
    <div class="px-[22.5rem] grid grid-cols-3 gap-x-[2.63rem] gap-y-[2.13rem]">
      <!-- 公司简介 -->
      <div class="w-full h-[13.75rem] rounded-lg cursor-pointer relative" @click="$router.push('/about/company')">
        <img src="https://api.lorem.space/image?w=372&h=220" alt="公司简介" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">公司简介</p>
        </div>
      </div>
      <!-- 经营理念 -->
      <div class="w-full h-[13.75rem] rounded-lg cursor-pointer relative" @click="$router.push('/about/business')">
        <img src="https://api.lorem.space/image?w=372&h=220" alt="管理理念" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">经营理念</p>
        </div>
      </div>
      <!-- 药剂师简介 -->
      <div class="w-full h-[13.75rem] rounded-lg cursor-pointer relative" @click="$router.push('/about/pharmacist')">
        <img src="https://api.lorem.space/image?w=372&h=220" alt="药剂师概述" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">药剂师简介</p>
        </div>
      </div>
      <!-- 沿革历史 -->
      <div class="w-full h-[13.75rem] rounded-lg cursor-pointer relative" @click="$router.push('/about/history')">
        <img src="https://api.lorem.space/image?w=372&h=220" alt="会社概要" class="w-full h-full rounded-lg">
        <div class="absolute bottom-0 inset-x-0 w-full h-[50px] rounded-b-lg bg-[rgba(0,0,0,0.5)]">
          <p class="text-lg text-white text-center leading-[50px]">沿革历史</p>
        </div>
      </div>
    </div>
  </div>
</template>