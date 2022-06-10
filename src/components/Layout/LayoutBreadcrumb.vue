<template>
  <div
    v-if="$route.meta.breadcrumb"
    class="w-full h-14 px-[22.5rem] shadow flex items-center"
  >
    <div 
      v-for="(item, index) in $route.meta.breadcrumb" 
      :key="index"
      class="flex items-center"
    >
      <div 
        :class="$route.meta.breadcrumb['length'] - index === 1 ? 'text-primary cursor-default' : 'cursor-pointer hover:font-bold hover:underline'"
        @click="$router.push(item['url'])"
      >
        {{ item['text'] }}
      </div>
      <div v-if="index < $route.meta.breadcrumb['length'] - 1" class="mx-2">></div>
    </div>
  </div>
</template>