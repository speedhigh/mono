<template>
  <div class="py-10 px-[22.5rem]">
    <!-- banner -->
    <div class="w-full h-[18.75rem] rounded bg-gray-400 mb-3"></div>

    <!-- <div v-for="i in 10" :key="i">
      <base-news-item :id="i + ''" date="2020年03月13日" title="新型コロナウイルス感染拡大防止のためのカスタマーサポート窓口体制について" />
    </div> -->

     <base-pagination
        :size="10"
        url="/article/getPage"
        class="mt-4"
      >
        <template #default="slotProps">
          <div v-for="item in slotProps.list" :key="item.id">
            <base-news-item :id="item.id" :date="item.inserttime" :title="item.title" />
          </div>
        </template>
      </base-pagination>
  </div>
</template>

<script setup>
</script>