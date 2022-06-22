<template>
  <div 
    class="relative text-gray-900 text-base pb-[188px] leading-none min-h-screen flex flex-col justify-between"
    :class="$route.meta.breadcrumb ? 'pt-[156px]' : 'pt-[100px]'"  
  >
    <!-- header -->
    <layout-header />
    <!-- content / bredcrumb -->
    <div>
      <div class="fixed top-[6.25rem] inset-x-0 bg-white shadow z-50">
        <layout-breadcrumb />
      </div>
      <router-view></router-view>
    </div>
    <!-- footer -->
    <layout-footer />
  </div>
</template>