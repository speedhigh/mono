<template>
  <div class="w-[1200px] mx-auto py-14">
    <h2 class="text-4xl">{{ msg.title }}</h2>
    <div v-html="msg.content" class="mt-[3.75rem]" />
  </div>
</template>


<script setup>
import { ref } from 'vue'
import api from '/src/api/index.js'
import emitter from '/src/until/eventbus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const msg = ref({})

api.get('/aboutus/getDetail', { title: t('message.infoSecurity') }).then((res) => {
  if(res.data.code === 20000) Object.assign(msg.value, res.data.data)
  setTimeout(() => emitter.emit('changeLoadingState', false), 50)
})
</script>

<style scoped>
td {
  @apply border text-base p-4
}
.td-title {
  @apply font-bold bg-gray-300 w-56
}
</style>