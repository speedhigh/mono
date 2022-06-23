<template>
  <footer class="absolute bottom-0 inset-x-0 text-xs border-t z-50">
    <div class="w-full h-[8.75rem] bg-gray-100">
      <div class="w-[1200px] h-full mx-auto flex items-center">
        <img :src="logoImg" alt="HSD国际株式会社" width="266" height="60">
        <div class="ml-auto space-y-4">
          <p class="cursor-pointer">
            <!-- 关于本网站 -->
            <span
              class="hover:font-bold"
              :class="{'font-bold': $route.path === '/about/website'}"
              @click="$router.push('/about/website')"
            >
              {{ t('message.aboutWeb') }}
            </span>
            <!-- 信息安全基本方针 -->
            <span 
              class="ml-8 hover:font-bold"
              :class="{'font-bold': $route.path === '/about/security'}"
              @click="$router.push('/about/security')"
            >
              {{ t('message.infoSecurity') }}
            </span>
            <!-- 隐私政策 -->
            <span 
              class="ml-8 hover:font-bold"
              :class="{'font-bold': $route.path === '/about/privacy'}"
              @click="$router.push('/about/privacy')"
            >
              {{ t('message.privacy') }}
            </span>
          </p>
          <div class="flex items-center justify-end space-x-8">
            <!-- 联系我们 -->
            <p 
              class="hover:font-bold cursor-pointer"
              :class="{'font-bold': $route.path === '/about/contact'}"
              @click="$router.push('/about/contact')"
            >
              {{ t('message.contactUs') }}
            </p>
            <!-- 关于我们 -->
            <p 
              class="hover:font-bold cursor-pointer"
              :class="{'font-bold': $route.meta.name === 'About'}"
              @click="$router.push('/about')"
            >
              {{ t('message.about') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-12 leading-[3rem] bg-primary text-white text-center">
      {{ t('message.footerText') }}
    </div>
  </footer>
</template>

<script setup>
import logoImg from '/src/assets/images/logo.png'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>