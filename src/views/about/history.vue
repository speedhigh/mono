<template>
  <div>
    <h2 class="text-4xl">{{ msg.title }}</h2>
    <div v-html="msg.content" class="mt-14" />
    <!-- <div class="mt-14 space-y-10 text-gray-600">
      <div class="flex items-center space-x-2.5">
        <div class="w-1 h-[1.63rem] bg-blue-500 rounded-sm" />
        <p class="text-xl">2022.05.12   東京支社の設立</p>
      </div>
      <div class="flex items-center space-x-2.5">
        <div class="w-1 h-5 bg-blue-500 rounded-sm" />
        <p>2021.02.06   大阪支社の設立</p>
      </div>
      <div class="flex items-center space-x-2.5">
        <div class="w-1 h-5 bg-blue-500 rounded-sm" />
        <p>2020.01.02   東京支社の設立</p>
      </div>
      <div class="flex items-center space-x-2.5">
        <div class="w-1 h-5 bg-blue-500 rounded-sm" />
        <p>2022.05.12   東京支社の設立</p>
      </div>
      <div class="flex items-center space-x-2.5">
        <div class="w-1 h-5 bg-blue-500 rounded-sm" />
        <p>2019.04.20   福岡本社の設立</p>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import emitter from '/src/until/eventbus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const msg = ref({})
api.get('/aboutus/getDetail', { title: t('message.aboutHistory') }).then((res) => {
  if(res.data.code === 20000) Object.assign(msg.value, res.data.data)
  setTimeout(() => emitter.emit('changeLoadingState', false), 50)
})
</script>