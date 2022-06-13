<template>
  <div v-if="$route.meta.breadcrumb" class="h-14 shadow">
    <div class="w-[1200px] h-full mx-auto flex items-center">
      <div v-for="(item, index) in $route.meta.breadcrumb" :key="index" class="flex items-center">
        <div
          :class="$route.meta.breadcrumb['length'] - index === 1 ? 'text-primary cursor-default' : 'cursor-pointer hover:font-bold hover:underline'"
          @click="$router.push(item['url'])">
          {{ item['text'] }}
        </div>
        <div v-if="index < $route.meta.breadcrumb['length'] - 1" class="mx-2">></div>
      </div>
    </div>
  </div>
</template>