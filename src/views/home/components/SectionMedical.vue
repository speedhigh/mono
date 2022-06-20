<template>
  <section class="mt-[4.75rem] space-y-[50px] w-[1200px] mx-auto">
    <!-- 老年介護製品 -->
    <div class="w-full flex space-x-9">
      <div
        class="w-[36.25rem] h-[18.75rem] flex-shrink-0 rounded-lg py-5 pl-28 pr-24"
        style="box-shadow: 0rem 0rem 1rem 0rem #E6E6E6"
      >
        <img :src="MedicalA" width="372" height="260" alt="老年介護製品" class="w-full h-full object-cover">
      </div>
        <div class="w-[36.25rem] h-[18.75rem] flex-shrink-0 pt-4">
        <p class="text-lg">{{ t('message.productTitleA') }} \</p>
        <h2 class="mt-4 text-[2.13rem] text-primary">{{ t('message.productTitleC') }}</h2>
        <p class="mt-7 text-base leading-7 h-28">{{ t('message.medicalTextA') }}</p>
        <el-button type="primary" class="mt-6 min-w-[10rem] h-11" size="large" @click="$router.push('/product/detail/47')">{{ t('message.seeAll') }}</el-button>
      </div>
    </div>
    <!-- 家庭用医療機器 -->
    <div class="w-full flex space-x-9">
      <div class="w-[36.25rem] h-[18.75rem] flex-shrink-0 pt-4">
        <p class="text-lg">{{ t('message.productTitleA') }} \</p>
        <h2 class="mt-4 text-[2.13rem] text-primary">{{ t('message.productTitleD') }}</h2>
        <p class="mt-7 text-base leading-7 h-28">{{ t('message.medicalTextB') }}</p>
        <el-button type="primary" class="mt-6 min-w-[10rem] h-11" size="large" @click="$router.push('/product/detail/76')">{{ t('message.seeAll') }}</el-button>
      </div>
      <div
        class="w-[36.25rem] h-[18.75rem] flex-shrink-0 rounded-lg py-5 pl-28 pr-24"
        style="box-shadow: 0rem 0rem 1rem 0rem #E6E6E6"
      >
        <img :src="MedicalB" width="372" height="260" alt="家庭用医療機器" class="w-full h-full object-cover">
      </div>
    </div>
  </section>
</template>

<script setup>
import MedicalA from '/src/assets/images/home/medical_a.webp'
import MedicalB from '/src/assets/images/home/medical_b.webp'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>