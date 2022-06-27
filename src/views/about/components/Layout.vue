<template>
  <div class="px-[22.5rem] flex space-x-20 pt-12 pb-16">
    <div class="w-[13.13rem] flex-shrink-0 relative">
      <div class="space-y-[1.81rem] fixed">
        <h1 class="text-2xl">会社情報</h1>
        <div>
          <div class="w-[13.13rem] h-1 bg-primary rounded-sm" />
          <!-- 公司简介 -->
          <div 
            class="w-[13.13rem] h-16 flex items-center px-2.5 border-b cursor-pointer hover:bg-gray-50"
            :class="{ 'bg-gray-100': $route.path === '/about/company' }"
            @click="$router.replace('/about/company')"
          >
            <p class="text-sm">{{ t('message.aboutCompany') }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <!-- 经营理念 -->
          <div 
            class="w-[13.13rem] h-16 flex items-center px-2.5 border-b cursor-pointer hover:bg-gray-50"
            :class="{ 'bg-gray-100': $route.path === '/about/business' }"
            @click="$router.replace('/about/business')"
          >
            <p class="text-sm">{{ t('message.aboutBusiness') }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <!-- 药剂师简介 -->
          <div 
            class="w-[13.13rem] h-16 flex items-center px-2.5 border-b cursor-pointer hover:bg-gray-50"
            :class="{ 'bg-gray-100': $route.path === '/about/pharmacist' }"
            @click="$router.replace('/about/pharmacist')"
          >
            <p class="text-sm">{{ t('message.aboutPharmacist') }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <!-- 公司资质 -->
          <div 
            class="w-[13.13rem] h-16 flex items-center px-2.5 border-b cursor-pointer hover:bg-gray-50"
            :class="{ 'bg-gray-100': $route.path === '/about/aptitude' }"
            @click="$router.replace('/about/aptitude')"
          >
            <p class="text-sm">{{ t('message.aboutusB') }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <!-- 联系我们 -->
          <div 
            class="w-[13.13rem] h-16 flex items-center px-2.5 border-b cursor-pointer hover:bg-gray-50"
            :class="{ 'bg-gray-100': $route.path === '/about/contact' }"
            @click="$router.replace('/about/contact')"
          >
            <p class="text-sm">{{ t('message.contactUs') }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow min-h-[70vh]">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import emitter from '/src/until/eventbus'
const { t } = useI18n()
emitter.emit('changeLoadingState', false)
</script>