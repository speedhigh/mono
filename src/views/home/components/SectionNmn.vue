<template>
  <section class="mt-32">
    <h2 class="text-4xl text-center">{{ t('message.nmnTitle') }}</h2>
    <div class="mt-16 w-full flex h-96">
      <!-- 高純度 99.9% -->
      <div
        class="w-1/3 h-full cursor-pointer relative"
        @mouseenter="active_nmn.a = true"
        @mouseleave="active_nmn.a = false"
        @click="$router.push('/nmn')"
      >
        <div
          v-if="active_nmn.a"
          class="absolute inset-0 w-full h-full bg-primary p-[4.5rem] text-white space-y-10"
        >
          <h3 class="text-4xl text-center">{{ t('message.nmnTitleA') }}</h3>
          <p class="text-xl text-center leading-[2.13rem]">{{ t('message.nmnTextA') }}</p>
        </div>
        <img :src="NmnA" alt="高純度 99.9%" width="100%" height="384" class="w-full h-full object-cover">
      </div>
      <!-- 効性32倍持続 -->
      <div
        class="w-1/3 h-full cursor-pointer relative"
        @mouseenter="active_nmn.b = true"
        @mouseleave="active_nmn.b = false"
        @click="$router.push('/nmn')"
      >
        <div
          v-if="active_nmn.b"
          class="absolute inset-0 w-full h-full bg-primary p-[4.5rem] text-white space-y-10"
        >
          <h3 class="text-4xl text-center">{{ t('message.nmnTitleB') }}</h3>
          <p class="text-xl text-center leading-[2.13rem]">{{ t('message.nmnTextB') }}</p>
        </div>
        <img :src="NmnB" alt="効性32倍持続" width="100%" height="384" class="w-full h-full object-cover">
      </div>
      <!-- きゅうしゅうりつ -->
      <div
        class="w-1/3 h-full cursor-pointer relative"
        @mouseenter="active_nmn.c = true"
        @mouseleave="active_nmn.c = false"
        @click="$router.push('/nmn')"
      >
        <div
          v-if="active_nmn.c"
          class="absolute inset-0 w-full h-full bg-primary p-[4.5rem] text-white space-y-10"
        >
          <h3 class="text-4xl text-center">{{ t('message.nmnTitleC') }}</h3>
          <p class="text-xl text-center leading-[2.13rem]">{{ t('message.nmnTextC') }}</p>
        </div>
        <img :src="NmnC" alt="きゅうしゅうりつ" width="100%" height="384" class="w-full h-full object-cover">
      </div>
    </div>
    <div class="text-center">
      <button
        class="mt-14 w-56 h-12 bg-primary hover:bg-blue-400 text-white rounded"
        @click="$router.push('/nmn')"
      >
        {{ t('message.seeMoreNmn') }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import NmnA from '/src/assets/images/home/nmn_a.webp'
import NmnB from '/src/assets/images/home/nmn_b.webp'
import NmnC from '/src/assets/images/home/nmn_c.webp'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// NMN指针停留
const active_nmn = reactive({
  a: false,
  b: false,
  c: false
})

</script>