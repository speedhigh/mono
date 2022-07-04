<template>
  <section class="mt-[4.75rem] space-y-[50px] w-[1200px] mx-auto">
    <!-- 福祉用具販売事業 -->
    <div class="w-full flex space-x-9">
      <div
        class="w-[36.25rem] h-[18.75rem] flex-shrink-0 rounded-lg"
        style="box-shadow: 0rem 0rem 1rem 0rem #E6E6E6"
      >
        <img :src="MedicalA" width="580" height="300" alt="福祉用具販売事業" class="rounded-lg">
      </div>
        <div class="w-[36.25rem] h-[18.75rem] flex-shrink-0 pt-4">
        <p class="text-lg">{{ t('message.productTitleA') }} \</p>
        <h2 class="mt-4 text-[2.13rem] text-primary">{{ t('message.productTitleC') }}</h2>
        <p class="mt-7 text-base leading-7 h-28">{{ t('message.medicalTextA') }}</p>
        <el-button type="primary" class="mt-6 min-w-[10rem] h-11" size="large" @click="toProduct(2)">{{ t('message.seeAll') }}</el-button>
      </div>
    </div>
    <!-- 私たち医療機器事業部は -->
    <div class="w-full flex space-x-9">
      <div class="w-[36.25rem] h-[18.75rem] flex-shrink-0 pt-4">
        <p class="text-lg">{{ t('message.productTitleA') }} \</p>
        <h2 class="mt-4 text-[2.13rem] text-primary">{{ t('message.productTitleD') }}</h2>
        <p class="mt-7 text-base leading-7 h-28">{{ t('message.medicalTextB') }}</p>
        <el-button type="primary" class="mt-6 min-w-[10rem] h-11" size="large" @click="toProduct(1)">{{ t('message.seeAll') }}</el-button>
      </div>
      <div
        class="w-[36.25rem] h-[18.75rem] flex-shrink-0 rounded-lg"
        style="box-shadow: 0rem 0rem 1rem 0rem #E6E6E6"
      >
        <img :src="MedicalB" width="580" height="300" alt="私たち医療機器事業部は" class="rounded-lg">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import MedicalA from '/src/assets/images/home/medical_a.webp'
import MedicalB from '/src/assets/images/home/medical_b.webp'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()

const clazzNames = ref(JSON.parse(sessionStorage.getItem("clazzNames")))

const toProduct = function(active) {
  sessionStorage.removeItem("seriesname")
  sessionStorage.setItem('clazzActive', active)
  sessionStorage.setItem('clazzname', clazzNames.value[active])
  router.push('/product/list')
}
</script>