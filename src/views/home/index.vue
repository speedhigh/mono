<template>
  <!-- 轮播图 -->
  <home-banner />
  <!-- main -->
  <main class="py-[7.5rem]">
    <!-- 企业新闻 -->
    <section-news />
    <!-- NMN -->
    <section-nmn />
    <!-- 药品介绍 -->
    <section-product />
    <!-- 保健器械 -->
    <section-medical />
    <!-- 企业情报 -->
    <section-about />
  </main>
</template>

<script setup>
import HomeBanner from './components/HomeBanner.vue'
import SectionNews from './components/SectionNews.vue'
import SectionNmn from './components/SectionNmn.vue'
import SectionProduct from './components/SeciontProduct.vue'
import SectionMedical from './components/SectionMedical.vue'
import SectionAbout from './components/SectionAbout.vue'
import emitter from '/src/until/eventbus'
setTimeout(() => emitter.emit('changeLoadingState', false), 150)
</script>