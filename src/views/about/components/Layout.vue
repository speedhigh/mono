<template>
  <div class="px-[22.5rem] flex space-x-20 pt-12 pb-16">
    <div class="w-[13.13rem] flex-shrink-0 relative">
      <div class="space-y-[1.81rem] fixed">
        <h1 class="text-2xl">关于我们</h1>
        <div>
          <div class="w-[13.13rem] h-1 bg-primary rounded-sm" />
          <!-- 公司简介 -->
          <div 
            class="w-[13.13rem] h-16 flex items-center px-2.5 border-b cursor-pointer hover:bg-gray-50"
            :class="{ 'bg-gray-100': $route.path === '/about/company' }"
            @click="$router.push('/about/company')"
          >
            <p class="text-sm">公司简介</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <!-- 经营理念 -->
          <div 
            class="w-[13.13rem] h-16 flex items-center px-2.5 border-b cursor-pointer hover:bg-gray-50"
            :class="{ 'bg-gray-100': $route.path === '/about/business' }"
            @click="$router.push('/about/business')"
          >
            <p class="text-sm">经营理念</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <!-- 药剂师简介 -->
          <div 
            class="w-[13.13rem] h-16 flex items-center px-2.5 border-b cursor-pointer hover:bg-gray-50"
            :class="{ 'bg-gray-100': $route.path === '/about/pharmacist' }"
            @click="$router.push('/about/pharmacist')"
          >
            <p class="text-sm">药剂师简介</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <!-- 沿革历史 -->
          <div 
            class="w-[13.13rem] h-16 flex items-center px-2.5 border-b cursor-pointer hover:bg-gray-50"
            :class="{ 'bg-gray-100': $route.path === '/about/history' }"
            @click="$router.push('/about/history')"
          >
            <p class="text-sm">沿革历史</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <router-view />
    </div>
  </div>
</template>